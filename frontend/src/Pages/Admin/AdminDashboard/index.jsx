import React, {useEffect, useState} from "react";
import DashboardLayout from "../../../Layouts/DashboardLayout";
import "react-big-calendar/lib/css/react-big-calendar.css"
import {Calendar, momentLocalizer, Views} from 'react-big-calendar'
import moment from 'moment'
import {useDispatch, useSelector} from "react-redux";
import {getAllEvents} from "../../../Store/Admin/adminSlice";
import CurrentEventModal from "./Modal";

let allViews = Object.keys(Views).map((k) => Views[k])
const AdminDashboard = () => {
    const dispatch = useDispatch()
    const [currentModal, setCurrentModal] = useState(false)
    const [currentEvent, setCurrentEvent] = useState(null)
    const {data} = useSelector(state => state.admin.events)
    const localizer = momentLocalizer(moment)

    useEffect(() => {
        dispatch(getAllEvents())
    }, [dispatch])

    const onDoubleClickEvent = (e) => {
        setCurrentModal(true)
        setCurrentEvent(data.data.result.filter(elm => elm._id === e.id)[0])
    }

    return (
        <DashboardLayout>
            <Calendar
                localizer={localizer}
                dayLayoutAlgorithm="no-overlap"
                events={data?.data?.result?.map((elm, index) => {
                    return (
                        {
                            id: elm._id,
                            title: elm.type.en,
                            name: elm.name.en,
                            start: new Date(elm.date.from),
                            end: new Date(elm.date.to)
                        }
                    )
                })}
                showMultiDayTimes
                step={60}
                views={allViews}
                onDoubleClickEvent={onDoubleClickEvent}
            />
            <CurrentEventModal
                currentModal={currentModal}
                setCurrentModal={setCurrentModal}
                currentEvent={currentEvent}
            />
        </DashboardLayout>
    )
}
export default AdminDashboard