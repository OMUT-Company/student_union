import React, {useEffect, useState} from "react"
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input} from 'antd';

import {addOrganization, getAllFunders} from "../../../../Store/Admin/adminSlice";

import DashboardLayout from "../../../../Layouts/DashboardLayout";
import Notification from "../../../../Components/atoms/Notification";


const AddFunder = () => {
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [status, setStatus] = useState({})
    const {isError, errorMessage,isSuccess,data} = useSelector(state => state.admin.addOrganization)

    useEffect(() => {
        if (isError){
            setStatus({type: "error", message: errorMessage, placement: "topRight", resetSection: "addOrganization"})
        }
    }, [isError, errorMessage])

    useEffect(() => {
        if (isSuccess){
            form.resetFields();
            dispatch(getAllFunders())
            setStatus({type: "success", message: data.data.message, placement: "topRight", resetSection: "addOrganization"})
        }
    }, [isSuccess])
    const onFinish = (values) => {
        dispatch(addOrganization(values))
    }

    return (
        <DashboardLayout  currentSection={"1"}>
            <div className="admin-dashboard-content_add-funder">
                <Form
                    name="basic"
                    wrapperCol={{
                        span: 24,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                    form={form}
                >
                    <Form.Item
                        label="Company Name"
                        name="name"
                        rules={[{required: true, message: 'Please input your Company name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Director"
                        name="director"
                        rules={[{required: true, message: 'Please input your Director name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Phone Number"
                        name="number"
                        rules={[{required: true, message: 'Please input your Company phone number!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Address"
                        name="address"
                        rules={[{required: true, message: 'Please input your Company name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[{required: true, message: 'Please input your Company email!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 5,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Add organization
                        </Button>
                    </Form.Item>
                </Form>
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
export default AddFunder