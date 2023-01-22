import React from "react";


import  {Modal} from "antd";

const CurrentEventModal = ({currentEvent, currentModal, setCurrentModal}) => {
    return (
        <Modal
            title={currentEvent?.name.en}
            open={currentModal}
            onOk={() => (setCurrentModal(false))}
            onCancel={() => setCurrentModal(false)}
        >
            <div className="see-event-modal">
                <div>
                    <p>{currentEvent?.description.en}</p>
                </div>
            </div>
        </Modal>
    )
}

export default CurrentEventModal