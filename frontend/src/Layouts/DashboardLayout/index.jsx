import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

import {AppstoreOutlined, TeamOutlined, ApartmentOutlined} from '@ant-design/icons';
import {Button, Menu} from 'antd';
import Spinner from "../../Components/atoms/Spinner";

import "./style.scss"
import {reset} from "../../Store/Admin/adminSlice";

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('Organizations', 'sub1', <ApartmentOutlined/>, [
        getItem('Add Funders', '1'),
        getItem('See Funders', '2'),
        getItem('See Suggestion', '3'),
    ]),

    getItem('Events', 'sub2', <AppstoreOutlined/>, [
        getItem('Add Events', '4'),
        getItem('See Events', '5'),
    ]),

    getItem('Volunteers', 'sub3', <TeamOutlined />, [
        getItem('See Volunteers', '6'),
    ]),
];

const DashboardLayout = ({children, currentSection}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {
        addOrganization,
        organizations,
        deleteOrganization,
        updateOrganization,
        organizationsOffer,
        organizationOfferAnswer,
        addEvent,
        events,
        volunteers,
        volunteersProcess
    } = useSelector(state => state.admin)
    const onClick = (e) => {

        switch (e.key) {
            case "1":
                navigate("/admin/dashboard/funder/add")
                break
            case "2":
                navigate("/admin/dashboard/funder/see")
                break
            case "3":
                navigate("/admin/dashboard/funder/suggestion")
                break
            case "4":
                navigate("/admin/dashboard/event/add")
                break
            case "5":
                navigate("/admin/dashboard/event/see")
                break
            case "6":
                navigate("/admin/dashboard/volunteer")
        }
    };

    const signOut = () => {
        sessionStorage.removeItem("accessToken")
        navigate("/admin")
        dispatch(reset("signIn"))
    }

    return (
        <React.Fragment>
            <div className="admin-dashboard">
                <div className="admin-dashboard_head">
                    <div className="admin-dashboard_head_logo" onClick={() => navigate("/admin/dashboard")}>OMUT</div>
                    <div>
                        <Button onClick={() => signOut()} type={"primary"}>Sign out</Button>
                    </div>
                </div>
                <div>
                    <div className="admin-dashboard_sidebar">
                        <Menu
                            onClick={onClick}
                            style={{width: 256}}
                            defaultSelectedKeys={[currentSection]}
                            defaultOpenKeys={['sub1',"sub2","sub3"]}
                            mode="inline"
                            items={items}
                        />
                    </div>
                    <div className="admin-dashboard_content">
                        {children}
                    </div>
                </div>
            </div>
            <Spinner
                loading={(
                    addOrganization.isLoading ||
                    organizations.isLoading ||
                    deleteOrganization.isLoading ||
                    updateOrganization.isLoading ||
                    organizationsOffer.isLoading ||
                    organizationOfferAnswer.isLoading ||
                    addEvent.isLoading ||
                    events.isLoading ||
                    volunteers.isLoading ||
                    volunteersProcess.isLoading
                )}
            />
        </React.Fragment>
    );
};

export default memo(DashboardLayout);