import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {addNewEvent, getAllFunders} from "../../../../Store/Admin/adminSlice";
import {addEventUtils} from "./utils"

import DashboardLayout from "../../../../Layouts/DashboardLayout";
import {Button, Input, Select, DatePicker, Space} from 'antd';
import Notification from "../../../../Components/atoms/Notification";

import "./style.scss"

const {RangePicker} = DatePicker;
const {TextArea} = Input

const AddEvent = () => {
    const dispatch = useDispatch()
    const {errorMessage, isSuccess, isError, data} = useSelector(state => state.admin.addEvent)
    const {organizations} = useSelector(state => state.admin)

    const formCopy = JSON.parse(JSON.stringify(addEventUtils.formStructure))

    const [form, setForm] = useState(formCopy)
    const [status, setStatus] = useState({})

    useEffect(() => {
        if (!organizations.data) dispatch(getAllFunders())
    }, [])

    useEffect(() => {
        if (isError) {
            setStatus({
                type: "error",
                message: errorMessage,
                placement: "topRight",
                resetSection: "addEvent"
            })
        }

        if (isSuccess) {
            setStatus({
                type: "success",
                message: data.data.message,
                placement: "topRight",
                resetSection: "addEvent"
            })
        }

    }, [isError, isSuccess])
    const inputHandle = (e) => {
        const {id, name, value} = e.target
        const copy = {...form}

        copy[id][name] = value
        setForm(copy)
    }
    const dateHandle = (dates, dateStrings) => {
        const copy = {...form}
        if (dates) {
            copy.date.from = dateStrings[0]
            copy.date.to = dateStrings[1]
        } else {
            copy.date.from = ""
            copy.date.to = ""
        }
        setForm(copy)
    }
    const multiSelectHandle = (data) => {
        const copy = {...form}
        copy.financiers = data

        setForm(copy)
    }
    const selectHandle = (e, typeSelect) => {
        const copy = {...form}
        copy[typeSelect] = addEventUtils[typeSelect === "type" ? "typeStructure" : "placeStructure"].filter(elm => elm.field.value === e)[0].translation

        setForm(copy)
    }

    const add = () => {
        let isEmpty = true
        for (let key in form) {
            if (!(form[key] instanceof Array)) {
                for (let key2 in form[key]) {
                    if (!form[key][key2]) {
                        isEmpty = false
                    }
                }
            } else {
                if (form[key].length < 1) {
                    isEmpty = false
                }
            }
        }

        if (isEmpty) {
            const formCopy = JSON.parse(JSON.stringify(addEventUtils.formStructure))

            setForm(formCopy)
            dispatch(addNewEvent(form))
        } else {
            setStatus({
                type: "error",
                message: "All fields are required",
                placement: "topRight",
                resetSection: "addEvent"
            })
        }
    }

    return (
        <DashboardLayout currentSection={"4"}>
            <div className="event-form">
                <div className="event-form_name">
                    <h3>Name</h3>
                    <div className="event-form_name_field">
                        <label>Am:</label>
                        <Input id="name" value={form.name.am} label="name" placeholder={"Անուն"} name="am"
                               onChange={(e) => inputHandle(e)}/>
                    </div>
                    <div className="event-form_name_field">
                        <label>En:</label>
                        <Input id="name" value={form.name.en} label="name" placeholder={"Name"} name="en"
                               onChange={(e) => inputHandle(e)}/>
                    </div>
                    <div className="event-form_name_field">
                        <label>Ru:</label>
                        <Input id="name" value={form.name.ru} label="name" placeholder={"Имя"} name="ru"
                               onChange={(e) => inputHandle(e)}/>
                    </div>
                </div>
                <div className="event-form_name">
                    <h3>Type</h3>
                    <Select
                        placeholder="Select a type"
                        style={{width: 500}}
                        onChange={(e) => selectHandle(e, "type")}
                        options={addEventUtils.typeStructure.map(elm => elm.field)}
                        value={form.type.en}
                    >
                    </Select>
                </div>
                <div className="event-form_name">
                    <h3>Place</h3>
                    <Select
                        placeholder="Select a place"
                        style={{width: 500}}
                        name={"select"}
                        onChange={(e) => selectHandle(e, "place")}
                        options={addEventUtils.placeStructure.map(elm => elm.field)}
                        value={form.place.en}
                    >
                    </Select>
                </div>
                <div className="event-form_name">
                    <h3>Time</h3>
                    <Space direction="vertical" size={12}>
                        <RangePicker
                            showTime
                            format="YYYY/MM/DD HH:mm:ss"
                            onChange={dateHandle}
                        />
                    </Space>
                </div>
                <div className="event-form_name">
                    <h3>Financiers</h3>
                    <Select
                        mode="multiple"
                        allowClear
                        style={{width: '100%'}}
                        placeholder="Please select"
                        onChange={multiSelectHandle}
                        value={form.financiers}
                        options={organizations?.data?.data.result.map(elm => {
                            return {
                                label: elm.name,
                                value: elm.name
                            }
                        })}
                    />
                </div>
                <div className="event-form_name">
                    <h3>Description</h3>
                    <div className="event-form_name_field">
                        <label>Am:</label>
                        <TextArea
                            value={form.description.am}
                            id="description" name="am"
                            rows={4}
                            maxLength={500}
                            onChange={inputHandle}
                        />
                    </div>
                    <div className="event-form_name_field">
                        <label>En:</label>
                        <TextArea
                            value={form.description.en}
                            id="description"
                            name="en"
                            rows={4}
                            maxLength={500}
                            onChange={inputHandle}
                        />
                    </div>
                    <div className="event-form_name_field">
                        <label>Ru:</label>
                        <TextArea
                            value={form.description.ru}
                            id="description"
                            name="ru"
                            rows={4}
                            maxLength={500}
                            onChange={inputHandle}
                        />
                    </div>
                </div>
                <div className="event-form_btn">
                    <Button type="primary" onClick={add}>
                        Add Event
                    </Button>
                </div>
            </div>
            <Notification
                type={status?.type}
                message={status?.message}
                placement={status?.placement}
                resetSection={status?.resetSection}
                setError={setStatus}
            />
        </DashboardLayout>
    )
}
export default AddEvent