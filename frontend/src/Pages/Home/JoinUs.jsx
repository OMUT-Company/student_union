import React, { useEffect, useState } from "react"
import useWindowSize from "../../Hooks/uswWindowSize";
import { Button, ConfigProvider, Input, Select } from "antd";
import joinImg from "../../Assets/png/join.jpeg";
import { useDispatch, useSelector } from "react-redux";
import { volunteerApply } from "../../Store/Content/contentSlice";
import Notification from "../../Components/atoms/Notification";
import { getAllFunders } from "../../Store/Admin/adminSlice";

const FormFields = {
    name: "",
    surname: "",
    age: null,
    gender: { value: "", text: "" },
    phoneNumber: "",
    email: "",
    previouslyApplied: { value: "", text: "" }
}
const JoinUs = () => {
    const form = JSON.parse(JSON.stringify(FormFields))
    const [formData, setFormData] = useState(form)
    const [status, setStatus] = useState({})
    const { isError, errorMessage, isSuccess, data } = useSelector(state => state.content.volunteerApply)
    const dispatch = useDispatch()

    useEffect(() => {
        if (isError) {
            setStatus({ type: "error", message: errorMessage, placement: "topRight", resetSection: "volunteerApply" })
        }

        if (isSuccess) {
            const form = JSON.parse(JSON.stringify(FormFields))
            setFormData(form)
            setStatus({ type: "success", message: data.data.message, placement: "topRight", resetSection: "volunteerApply" })
        }
    }, [isError, errorMessage, isSuccess])


    const inputHandle = (e) => {
        const copy = { ...formData }

        if (e.target) {
            copy[e.target.name] = e.target.value
        } else {
            if (e === "yes" || e === "no") {
                copy.previouslyApplied = e === "yes" ? { value: "yes", text: "Yes" } : { value: "no", text: "No" }
            } else {
                copy.gender = e === "male" ? { value: "male", text: "Male" } : { value: "female", text: "Female" }
            }
        }
        setFormData(copy)
    }

    /*sjdsdjsdjsdisjdisjdijdijsi*/
    // Example POST method implementation:
    const join = () => {
        let data = {
            name: FormFields.name,
            surname: FormFields.surname,
            age: FormFields.age,
            phoneNumber: FormFields.phoneNumber,
            email: formData.email,
            gender: "male",//formData.gender.value,
            previouslyApplied: formData.previouslyApplied.value === "yes"
        }

        fetch("http://localhost:5000/api/organization", {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'reload', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-type': 'application/json',
                'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzEyNTFkZjAzMjM5ZTY4MDAwMDAzMyIsImlhdCI6MTY3NDY3NzIxOSwiZXhwIjoxNjc3MjY5MjE5fQ.GNVGtdzDiiUMlaR9KBXWueldK0uCZaGU0t9SbnXiNy8", // notice the Bearer before your token
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        })
            .then((res) => {
                console.log({data: res.data, error: res.error}); // JSON data parsed by `data.json()` call
            });

    }

    return (
        <section className="join-us">
            <h3 className="join-us_title">Join Us!!!</h3>
            <div className="join-us_content">
                <div className="join-us_content_form">
                    <InputConfig>
                        <Input name="name" placeholder="Name" value={formData.name} type="string"
                            onChange={inputHandle} />
                    </InputConfig>
                    <InputConfig>
                        <Input name="surname" placeholder="surname" value={formData.surname} type="string"
                            onChange={inputHandle} />
                    </InputConfig>
                    <InputConfig>
                        <Input name="age" placeholder="Age" value={formData.age} type="number" onChange={inputHandle} />
                    </InputConfig>
                    <InputConfig>
                        <Input name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} type="string"
                            onChange={inputHandle} />
                    </InputConfig>
                    <InputConfig>
                        <Input name="email" placeholder="Email" value={formData.email} type="email"
                            onChange={inputHandle} />
                    </InputConfig>
                    <div className="join-us_content_form_btn">
                        <Button
                            type="primary"
                            style={{ width: 100, backgroundColor: "#162831" }}
                            size={"large"}
                            onClick={join}
                        >
                            JOIN
                        </Button>
                    </div>
                </div>
                <div className="join-us_content_img">
                    <div>
                        <img alt="join-us" src={joinImg} />
                    </div>
                </div>
            </div>
            <Notification
                type={status?.type}
                message={status?.message}
                placement={status?.placement}
                resetSection={status?.resetSection}
                setError={setStatus}
                stateOther={true}
            />
        </section>
    )
}

export const InputConfig = ({ children }) => {
    const { width } = useWindowSize()
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#162831',
                    fontSize: width > 991 ? "18px" : "14px",
                    lineHeight: width > 991 ? "18px" : "14px",
                    controlHeight: width > 991 ? 63 : 45,
                },
            }}
        >
            {children}
        </ConfigProvider>
    )
}
export default JoinUs