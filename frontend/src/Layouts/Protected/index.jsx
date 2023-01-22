import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Spinner from "../../Components/atoms/Spinner";
import {getAdminDetails} from "../../Store/Admin/adminSlice";

const Protected = ({children}) => {
    const {isSuccess, isLoading} = useSelector(state => state.admin.signIn)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const accessToken = sessionStorage.getItem("accessToken")

    useEffect(() => {
        dispatch(getAdminDetails())
    }, [])

    useEffect(() => {
        if (!accessToken) {
            navigate("/admin")
        }
    }, [isSuccess])

    return (
        <div>
            {
                accessToken &&
                isLoading ? <Spinner loading={true}/> : isSuccess ? children : (() => navigate("/admin"))()
            }
        </div>
    )
}
export default Protected