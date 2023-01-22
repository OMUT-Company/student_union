import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";

import {getAllEvents} from "../../../../Store/Admin/adminSlice";
import {addEventUtils} from "../AddEvent/utils"

import { Divider, Table} from 'antd';
import DashboardLayout from "../../../../Layouts/DashboardLayout";
import Notification from "../../../../Components/atoms/Notification";
import CurrentEventModal from "./Modal";

import "./style.scss"

const SeeEvent = () => {
    const dispatch = useDispatch()
    const {events, addEvent} = useSelector(state => state.admin)
    const [currentEvent, setCurrentEvent] = useState({key: "", data: ""})
    const [currentModal, setCurrentModal] = useState(false)
    const [status, setStatus] = useState({})

    useEffect(() => {
        dispatch(getAllEvents())
    }, [])

    useEffect(() => {
        if (addEvent.isError) {
            setStatus({
                type: "error",
                message: addEvent.errorMessage,
                placement: "topRight",
                resetSection: "addEvent"
            })
        }

        if (addEvent.isSuccess) {
            dispatch(getAllEvents())
            setStatus({
                type: "success",
                message: addEvent.data.data.message,
                placement: "topRight",
                resetSection: "addEvent"
            })
        }

    }, [addEvent.isError, addEvent.isSuccess])

    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name.length - b.name.length,
            sortDirections: ['descend'],
        },
        {
            title: 'Type',
            dataIndex: 'type',
            filters: addEventUtils.typeStructure.map(elm => {
                return {
                    text: elm.field.label,
                    value: elm.field.label
                }
            }),
            onFilter: (value, record) => record.type.indexOf(value) === 0,
        },
        {
            title: 'Volunteers',
            dataIndex: 'volunteers',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'Place',
            dataIndex: 'place',
            filters: addEventUtils.placeStructure.map(elm => {
                return {
                    text: elm.field.label,
                    value: elm.field.label
                }
            }),
            onFilter: (value, record) => record.place.indexOf(value) === 0,
        },
    ];

    const data = events?.data?.data.result.map((elm, index) => {
        return {
            id: elm._id,
            key: index,
            name: elm.name.en,
            place: elm.place.en,
            type: elm.type.en,
            volunteers: elm.volunteers.length,
            description: elm.description.en,
            date: elm.date,
            financiers: elm.financiers
        }
    })

    const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
            setCurrentModal(true)
            setCurrentEvent({key: selectedRowKeys[0], data: selectedRows[0]})
        },
    };
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    return (
        <DashboardLayout currentSection={"5"}>
            <Divider/>
            <Table rowSelection={{type: "radio", ...rowSelection}} onClick={(e) => console.log(e)} columns={columns}
                   dataSource={data} onChange={onChange}/>
           <CurrentEventModal
            currentModal={currentModal}
            setCurrentModal={setCurrentModal}
            currentEvent={currentEvent}
           />
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
export default SeeEvent