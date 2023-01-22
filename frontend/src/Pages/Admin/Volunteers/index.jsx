import React from "react-dom"
import DashboardLayout from "../../../Layouts/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {getAllVolunteers, removeVolunteer, updateVolunteer} from "../../../Store/Admin/adminSlice";

import {Button, Space, Table} from 'antd';
import Notification from "../../../Components/atoms/Notification";
import {png} from "../../../Assets/png";

const {Column, ColumnGroup} = Table;


const Volunteers = () => {
    const dispatch = useDispatch()
    const {volunteers, volunteersProcess} = useSelector(state => state.admin)
    const [status, setStatus] = useState({})
    const [refresh,setRefresh] = useState(false)

    const data = volunteers.data?.data.result.map((elm, index) => {
        return {
            key: index,
            id: elm._id,
            firstname: elm.name,
            lastname: elm.surname,
            age: elm.age,
            phoneNumber: elm.phoneNumber,
            email: elm.email,
            gender: elm.gender,
            applied: elm.previouslyApplied ? "Yes" : "No",
            new: elm.new
        }
    })

    useEffect(() => {
        if (!volunteers.data) {
            dispatch(getAllVolunteers())
        }
    }, [])

    useEffect(() => {
        if (volunteersProcess.isError) {
            setStatus({
                type: "error",
                message: volunteersProcess.errorMessage,
                placement: "topRight",
                resetSection: "volunteersProcess"
            })
        }

        if (volunteersProcess.isSuccess) {
            dispatch(getAllVolunteers())
            setStatus({
                type: "success",
                message: volunteersProcess.data.data.message,
                placement: "topRight",
                resetSection: "volunteersProcess"
            })
        }
    }, [volunteersProcess.isSuccess, volunteersProcess.isError])


    return (
        <DashboardLayout currentSection={"6"}>
            <div onClick={()=>dispatch(getAllVolunteers())} className={`reload ${volunteers.isLoading ? "loading" : ""}`}>
                <img alt="refresh" src={png.Refresh}/>
            </div>
            <Table dataSource={data}>
                <ColumnGroup title="Name">
                    <Column title="First Name" dataIndex="firstname" key="firstname"/>
                    <Column title="Last Name" dataIndex="lastname" key="lastname"/>
                </ColumnGroup>
                <Column title="Age" dataIndex="age" key="age"/>
                <Column title="PhoneNumber" dataIndex="phoneNumber" key="phoneNumber"/>
                <Column title="Gender" dataIndex="gender" key="gender"/>
                <Column title="Applied" dataIndex="applied" key="applied"/>
                <Column
                    title="Action"
                    key="action"
                    render={(_, record) => (
                        <Space size="middle">
                            <Button href={`mailto:${record.email}`} type="primary">Send Mail</Button>
                            <Button onClick={() => dispatch(removeVolunteer({id: record.id}))} type="primary"
                                    danger>Remove</Button>
                            {
                                record.new &&
                                <Button onClick={() => dispatch(updateVolunteer({id: record.id}))} type="primary"
                                        ghost>{record.new}New</Button>
                            }
                        </Space>
                    )}
                />
            </Table>
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

export default Volunteers