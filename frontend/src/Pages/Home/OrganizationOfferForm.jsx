import React, {useEffect, useState} from "react"
import {Button, Input, Select} from "antd";

import Notification from "../../Components/atoms/Notification";
import {InputConfig} from "./JoinUs";
import {useDispatch, useSelector} from "react-redux";
import TextArea from "antd/es/input/TextArea";
import {organizationOffer} from "../../Store/Content/contentSlice";

import "./style.scss"

const FormFields = {
    name: "",
    director: "",
    address: "",
    number: "",
    email: "",
    message: ""
}
const OrganizationOfferForm = () => {
    const form = JSON.parse(JSON.stringify(FormFields))
    const [formData, setFormData] = useState(form)
    const [status, setStatus] = useState({})
    const {isError, errorMessage,isSuccess,data} = useSelector(state => state.content.offerOfOrg)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError){
            setStatus({type: "error", message: errorMessage, placement: "topRight", resetSection: "offerOfOrg"})
        }

        if (isSuccess){
            const form = JSON.parse(JSON.stringify(FormFields))
            setFormData(form)
            setStatus({type: "success", message: data.data.message, placement: "topRight", resetSection: "offerOfOrg"})
        }
    }, [isError, errorMessage,isSuccess])

    const inputHandle = (e) => {
        const copy = {...formData}

        copy[e.target.name] = e.target.value
        setFormData(copy)
    }


    return (
        <div className="organization_offer_form">
            <InputConfig>
                <Input name="name" placeholder="Name" value={formData.name} type="string"
                       onChange={inputHandle}/>
            </InputConfig>
            <InputConfig>
                <Input name="director" placeholder="Director" value={formData.director} type="string"
                       onChange={inputHandle}/>
            </InputConfig>
            <InputConfig>
                <Input name="address" placeholder="Address" value={formData.address} type="string" onChange={inputHandle}/>
            </InputConfig>
            <InputConfig>
                <Input name="number" placeholder="Phone Number" value={formData.number} type="string"
                       onChange={inputHandle}/>
            </InputConfig>
            <InputConfig>
                <Input name="email" placeholder="Email" value={formData.email} type="email"
                       onChange={inputHandle}/>
            </InputConfig>
           <InputConfig>
               <TextArea
                   value={formData.message}
                   placeholder = "Motivation message"
                   name="message"
                   rows={8}
                   maxLength={500}
                   onChange={inputHandle}
                   style={{padding:"15px"}}
               />
           </InputConfig>
            <div className="join-us_content_form_btn">
                <Button
                    type="primary"
                    style={{width: 200, backgroundColor: "#162831"}}
                    size={"large"}
                    onClick={()=>dispatch(organizationOffer(formData))}
                >
                    SEND THE OFFER
                </Button>
            </div>
            <Notification
                type={status?.type}
                message={status?.message}
                placement={status?.placement}
                resetSection={status?.resetSection}
                setError={setStatus}
                stateOther={true}
            />
        </div>
    )
}
export default OrganizationOfferForm