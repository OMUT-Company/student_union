import axios from "axios"

const accessToken = sessionStorage.getItem("accessToken")
const signIn = async (data) => {
    const res = await axios.post("/api/admin/login", data)

    return res.data
}

const addOrganization = async (data) => {
    const res = await axios.post("/api/organization", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

const getAllFunders = async () => {
    const accessToken = sessionStorage.getItem("accessToken")
    const res = await axios.get("/api/organization/get", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

const deleteOrganization = async (data) => {
    const {id} = data
    const res = await axios.delete(`/api/organization/deleted/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    return res.data
}

const updateOrganization = async (data) => {

    const res = await axios.put("/api/organization/update", data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const getOrganizationOffer = async () => {

    const res = await axios.get("/api/organization/offer/get", {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const refusedOrganizationOffer = async (data) => {
    const {id} = data
    const res = await axios.delete(`/api/organization/offer/refused/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}
const confirmOrganizationOffer = async (data) => {
    const {id} = data
    const res = await axios.post(`/api/organization/offer/confirm/${id}`, {}, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const addEvent = async (data) => {
    const res = await axios.post(`/api/event`, data, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const getEvents = async () => {
    const res = await axios.get(`/api/event/see`, {}, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const removeEvent = async (data) => {
    const {id} = data
    const res = await axios.delete(`/api/event/remove/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const getAllVolunteers = async () =>{
    const res = await axios.get(`/api/volunteer/see`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const removeVolunteer = async (data) =>{
    const {id} = data
    const res = await axios.delete(`/api/volunteer/delete/${id}`, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const updateVolunteer = async (data) =>{
    const {id} = data
    const res = await axios.put(`/api/volunteer/update/${id}`,{}, {
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })

    return res.data
}

const getAdmin = async () =>{
    const accessToken = sessionStorage.getItem("accessToken")
    const res = await axios.get(`/api/admin/me`,{
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
}

export const adminService = {
    signIn,
    addOrganization,
    getAllFunders,
    deleteOrganization,
    updateOrganization,
    getOrganizationOffer,
    refusedOrganizationOffer,
    confirmOrganizationOffer,
    addEvent,
    getEvents,
    removeEvent,
    getAllVolunteers,
    removeVolunteer,
    updateVolunteer,
    getAdmin
}