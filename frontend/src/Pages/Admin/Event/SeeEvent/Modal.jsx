import React from "react";
import {useDispatch} from "react-redux";

import {removeEvent} from "../../../../Store/Admin/adminSlice";

import {Button, Modal} from "antd";

const CurrentEventModal = ({currentEvent, currentModal, setCurrentModal}) => {
    const dispatch = useDispatch()
    const remove = (id) => {
        dispatch(removeEvent({id}))
    }

    return (
        <Modal
            title={currentEvent.data?.name}
            open={currentModal}
            onOk={() => (setCurrentModal(false))}
            onCancel={() => setCurrentModal(false)}
        >
            <div className="see-event-modal">
                <div>
                    <span>From:</span> {currentEvent.data?.date?.from} -
                    <span>To:</span> {currentEvent.data?.date?.to}
                </div>
                <div>
                    <h2>Description</h2>
                    <p>{currentEvent.data?.description}</p>
                    <div>
                        <h2>Financiers</h2>
                        <ul>
                            {
                                currentEvent.data?.financiers?.map((elm, index) =>
                                    <li key={index}>{elm}</li>
                                )
                            }
                        </ul>
                    </div>
                    <div className="remove-btn">
                        <Button onClick={() => (remove(currentEvent.data?.id), setCurrentModal(""))} type="primary"
                                danger ghost>Remove</Button>
                    </div>
                </div>

            </div>
        </Modal>
    )
}

export default CurrentEventModal