import React from "react"
import {useDispatch} from "react-redux";
import {Form, Input, Modal} from "antd";
import {deleteCurrentOrganization, updateOrganization} from "../../../../Store/Admin/adminSlice";

const Modals = ({modal, setCurrentModal, currentOrg}) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch()
    const updateOrg = () => {
        const orgData = form.getFieldsValue()
        orgData.id = currentOrg._id
        dispatch(updateOrganization(orgData))
        form.resetFields()
    }

    const deleteOrg = () => {
        dispatch(deleteCurrentOrganization({id: currentOrg._id}))
    }

    return (
        <React.Fragment>
            {
                {
                    "delete":
                        <Modal
                            title="Warning!!!"
                            open={true}
                            onOk={() => (deleteOrg(), setCurrentModal(""))}
                            onCancel={() => setCurrentModal("")}
                        >
                            <p>Are you sure you want to delete the organization?</p>
                        </Modal>,
                    "update":
                        <Modal
                            title={"Edit"}
                            open={modal === "update"}
                            onOk={() => (updateOrg(), setCurrentModal(""))}
                            onCancel={() => setCurrentModal("")}
                        >
                            <Form
                                name="basic"
                                wrapperCol={{
                                    span: 24,
                                }}
                                initialValues={{
                                    remember: true,
                                }}
                                autoComplete="off"
                                form={form}
                            >
                                <Form.Item
                                    label="Company Name"
                                    name="name"
                                    rules={[{required: false}]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Director"
                                    name="director"
                                    rules={[{required: false}]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Phone Number"
                                    name="number"
                                    rules={[{required: false}]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Address"
                                    name="address"
                                    rules={[{required: false}]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    label="Email"
                                    name="email"
                                    rules={[{required: false}]}
                                >
                                    <Input/>
                                </Form.Item>
                                <Form.Item
                                    wrapperCol={{
                                        offset: 20,
                                        span: 5,
                                    }}
                                >
                                </Form.Item>
                            </Form>
                        </Modal>,
                    "info":
                        <Modal
                            title={currentOrg?.name}
                            open={modal === "info"}
                            onOk={() => setCurrentModal("")}
                            onCancel={() => setCurrentModal("")}
                        >
                            <div className="organizations_info">
                                <ul>
                                    <li><span>Director :</span> {currentOrg?.director}</li>
                                    <li><span>Address :</span> {currentOrg?.address}</li>
                                    <li><span>Number :</span> {currentOrg?.number}</li>
                                    <li><span>Email :</span> {currentOrg?.email}</li>
                                </ul>
                            </div>
                        </Modal>
                }[modal]
            }
        </React.Fragment>
    )
}
export default Modals