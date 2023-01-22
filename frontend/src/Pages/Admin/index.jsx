import React, {useEffect, useState} from 'react';
import {Button, Form, Input} from 'antd';
import "./style.scss"
import {useDispatch, useSelector} from "react-redux";
import {signIn} from "../../Store/Admin/adminSlice";
import Notification from "../../Components/atoms/Notification";
import {useNavigate} from "react-router-dom";


const Admin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [error, setError] = useState({})
    const {isError, errorMessage,isSuccess} = useSelector(state => state.admin.signIn)

    useEffect(() => {
        if (isError){
            setError({type: "error", message: errorMessage, placement: "topRight", resetSection: "signIn"})
        }
    }, [isError, errorMessage])

    useEffect(()=>{
        if(isSuccess){
            navigate("/admin/dashboard")
        }
    },[isSuccess])

    const onFinish = (values) => {
        dispatch(signIn(values))
    };

    return (
        <div className="admin-container">
            <Notification
                type={error?.type}
                message={error?.message}
                placement={error?.placement}
                resetSection={error?.resetSection}
                setError={setError}
            />
            <div className="admin-container_form-block">
                <div className="admin-container_form-block_title">
                    <h1>OMUT</h1>
                </div>
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
                >
                    <Form.Item
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 10,
                            span: 0,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default Admin