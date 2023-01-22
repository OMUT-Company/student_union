import React, {useEffect, useState} from "react"
import DashboardLayout from "../../../../Layouts/DashboardLayout";
import {useDispatch, useSelector} from "react-redux";

import {getAllFunders, reset} from "../../../../Store/Admin/adminSlice";

import Notification from "../../../../Components/atoms/Notification";
import Cart from "../../../../Components/atoms/cart";
import Modals from "./Modals"

import "./style.scss"
import {png} from "../../../../Assets/png";
const SeeFunder = () => {
    const dispatch = useDispatch()

    const {data, isLoading} = useSelector(state => state.admin.organizations)
    const {deleteOrganization} = useSelector(state => state.admin)
    const [status, setStatus] = useState({})
    const [currentModal, setCurrentModal] = useState({modal: "", id: ""})

    useEffect(() => {
        dispatch(getAllFunders())
        if (deleteOrganization.isError) {
            setStatus({
                type: "error",
                message: deleteOrganization.errorMessage,
                placement: "topRight",
                resetSection: "organizations"
            })
        }

        if (deleteOrganization.isSuccess) {
            dispatch(reset("deleteOrganization"))
            dispatch(reset("organizations"))
            setStatus({
                type: "success",
                message: deleteOrganization.data.data.message,
                placement: "topRight",
                resetSection: "addOrganization"
            })
        }
    }, [deleteOrganization.isError, deleteOrganization.errorMessage, deleteOrganization.isSuccess])

    return (
        <DashboardLayout  currentSection={"2"}>
            <div className="organizations">
                {
                    data?.data.result.map(organization =>
                        <div key={organization._id} className="organizations_item">
                            <Cart
                                details={organization}
                                onClick={setCurrentModal}
                                img={png.Omut}
                                deleteBtn={true}
                                updateBtn={true}
                                infoBtn={true}
                            />
                        </div>
                    )
                }
                {
                    data?.data.result.length < 1 &&
                    <div className="organizations_none">
                        <h2>Sorry but you have not funders!!!</h2>
                    </div>
                }
            </div>
            <Modals
                setCurrentModal={setCurrentModal}
                modal={currentModal.modal}
                currentOrg={ data?.data.result.filter(elm=>elm._id === currentModal.id)[0]}
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
export default SeeFunder