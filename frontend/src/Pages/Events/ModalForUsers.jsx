import React, {useEffect, useState} from "react"
import { ConfigProvider, Input, Modal, Select} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {applyAnEvent} from "../../Store/Content/contentSlice";
import Notification from "../../Components/atoms/Notification";
import useWindowSize from "../../Hooks/uswWindowSize";

import "./style.scss"

const FormFields = {
    name: "",
    surname: "",
    age: null,
    gender: {value: "", text: ""},
    phoneNumber: "",
    email: "",
    previouslyApplied: {value: "", text: ""}
}

const ModalForUsers = ({show, eventId, setShowModal}) => {
    const form = JSON.parse(JSON.stringify(FormFields))
    const [formData, setFormData] = useState(form)
    const [status, setStatus] = useState({})
    const {isError, errorMessage, isSuccess, data} = useSelector(state => state.content.eventApply)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            setStatus({type: "error", message: errorMessage, placement: "topRight", resetSection: "eventApply"})
        }

        if (isSuccess) {
            const form = JSON.parse(JSON.stringify(FormFields))
            setShowModal(false)
            setFormData(form)
            setStatus({
                type: "success",
                message: data.data.message,
                placement: "topRight",
                resetSection: "eventApply"
            })
        }
    }, [isError, errorMessage, isSuccess])

    const inputHandle = (e) => {
        const copy = {...formData}

        if (e.target) {
            copy[e.target.name] = e.target.value
        } else {
            if (e === "yes" || e === "no") {
                copy.previouslyApplied = e === "yes" ? {value: "yes", text: "Yes"} : {value: "no", text: "No"}
            } else {
                copy.gender = e === "male" ? {value: "male", text: "Male"} : {value: "female", text: "Female"}
            }
        }
        setFormData(copy)
    }

    const apply = (eventId) => {
        let data = {
            name: formData.name,
            surname: formData.surname,
            age: formData.age,
            phoneNumber: formData.phoneNumber,
            email: formData.email,
            gender: formData.gender.value,
            previouslyApplied: formData.previouslyApplied.value === "yes"
        }

        data.eventId = "63a20648d3b4835ad0f70268"

        dispatch(applyAnEvent(data))
    }

    return (
        <React.Fragment>
            <Modal
                title={"Fill the fields"}
                open={show}
                onOk={() => apply(eventId)}
                onCancel={() => setShowModal(false)}
            >
                <div className="events-modal">
                    <div className="events-modal_form">
                        <InputConfig2>
                            <Input name="name" placeholder="Name" value={formData.name} type="string"
                                   onChange={inputHandle}/>
                        </InputConfig2>
                        <InputConfig2>
                            <Input name="surname" placeholder="surname" value={formData.surname} type="string"
                                   onChange={inputHandle}/>
                        </InputConfig2>
                        <InputConfig2>
                            <Input name="age" placeholder="Age" value={formData.age} type="number"
                                   onChange={inputHandle}/>
                        </InputConfig2>
                        <InputConfig2>
                            <Input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber}
                                   type="string"
                                   onChange={inputHandle}/>
                        </InputConfig2>
                        <InputConfig2>
                            <Input name="email" placeholder="Email" value={formData.email} type="email"
                                   onChange={inputHandle}/>
                        </InputConfig2>
                        <div className="events-modal_form_select">
                            <InputConfig2>
                                <Select
                                    placeholder="Have you applied before?"
                                    style={{width: "100%"}}
                                    value={formData.previouslyApplied}
                                    options={[
                                        {value: "yes", text: "Yes"},
                                        {value: "no", text: "No"}
                                    ]}
                                    onChange={inputHandle}
                                />
                            </InputConfig2>
                        </div>
                        <div className="events-modal_form_select">
                            <InputConfig2>
                                <Select
                                    placeholder="Select a gender"
                                    value={formData.gender}
                                    style={{width: "100%"}}
                                    options={[
                                        {value: "male", text: "Male"},
                                        {value: "female", text: "Female"}
                                    ]}
                                    onChange={inputHandle}
                                />
                            </InputConfig2>
                        </div>
                    </div>
                </div>
            </Modal>
            <Notification
                type={status?.type}
                message={status?.message}
                placement={status?.placement}
                resetSection={status?.resetSection}
                setError={setStatus}
                stateOther={true}
            />
        </React.Fragment>
    )
}

export const InputConfig2 = ({children}) => {
    const {width} = useWindowSize()
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#162831',
                    fontSize: width > 991 ? "14px" : "12px",
                    lineHeight: width > 991 ? "14px" : "12px",
                    controlHeight: width > 991 ? 55 : 40,
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}
export default ModalForUsers