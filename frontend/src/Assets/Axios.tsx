const axios = require('axios')

const headers = {}

export const api = axios.create({
    baseURL: `${process.env.REACT_APP_SERVER_URL}/`,
    headers,
})

api.interceptors.request.use(async req => {
    const authToken = localStorage.getItem('user')
    const url = req.url
    switch (true) {
        case url?.includes('public'):
        case url?.includes('user/mail-verification'):
        case url?.includes('user/forgot-password'):
        case url?.includes('user/check-verify-code'):
        case url?.includes('user/edit-password'):
            req.headers = req.headers ?? {}
            break
        case url?.includes('contact-us'):
            req.headers = req.headers ?? {}
            req.withCredentials = true
            break
        case url?.includes('registration'):
            req.withCredentials = true
            req.headers = {
                'Content-Type': 'multipart/form-data',
            }
            break
        case url?.includes('create-event'):
        case url?.includes('add-feedback'):
        case url?.includes('user/edit-user-profile'):
        case url?.includes('user/edit-profile-image'):
        case url?.includes('user/create-article'):
            if (req.headers) {
                req.headers = {
                    Authorization: `Bearer ${authToken}`,
                    'Content-Type': 'multipart/form-data',
                }
            }
            break
        case url?.includes('user/login'):
            req.withCredentials = true
            break
        default:
            if (req.headers) {
                req.headers.Authorization = `Bearer ${authToken}`
            }
            break
    }

    return req
})
