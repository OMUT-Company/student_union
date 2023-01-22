import axios from "axios";

const getEvents = async () => {
    const res = await axios.get("/api/event/see")

    return res.data
}


const applyAnEvent = async (data) => {
    const res = await axios.post("/api/event/apply", data,{
        headers:{
            "Content-Type": 'application/json'
        }
    })

    return res.data
}

const organizationOffer = async (data) => {
    const res = await axios.post("/api/organization/offer",data,{
        headers:{
            "Content-Type": 'application/json'
        }
    })

    return res.data
}

const volunteerApply = async (data) =>{
    const res = await axios.post("/api/volunteer",data,{
        headers:{
            "Content-Type": 'application/json'
        }
    })

    return res.data
}

export const contentService = {
    getEvents,
    applyAnEvent,
    organizationOffer,
    volunteerApply
}