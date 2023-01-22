import React from "react"
import {Modal} from "antd";
import {confirmOrganizationOffer, refusedOrganizationOffer} from "../../../../Store/Admin/adminSlice";
import {useDispatch} from "react-redux";

const Modals = ({modal, setCurrentModal, currentOrg}) => {
    const dispatch = useDispatch()

    const refusedOffer = () => {
        dispatch(refusedOrganizationOffer({id: currentOrg._id}))
    }

    const approveOffer = () => {
        dispatch(confirmOrganizationOffer({id: currentOrg._id}))
    }

    return (
        <React.Fragment>
            {
                {
                    "delete":
                        <Modal
                            title="Warning!!!"
                            open={true}
                            onOk={() => (refusedOffer(), setCurrentModal(""))}
                            onCancel={() => setCurrentModal("")}
                        >
                            <p>Are you sure you want to delete the organization's offer?</p>
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
                                    <li>
                                        <span>Message :</span>
                                        <p>
                                            {currentOrg?.message}
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </Modal>,
                    "update":
                        <Modal
                            title={"Warning!!!"}
                            open={modal === "update"}
                            onOk={() => (setCurrentModal(""), approveOffer())}
                            onCancel={() => setCurrentModal("")}
                        >
                            <div className="organizations_info">
                                <p>Are you going to approve the offer?</p>
                            </div>
                        </Modal>
                }[modal]
            }
        </React.Fragment>
    )
}
export default Modals