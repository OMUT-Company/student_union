import React, {useState} from 'react';
import {EditOutlined, EllipsisOutlined, SettingOutlined, DeleteOutlined} from '@ant-design/icons';
import {Avatar, Card, Modal} from 'antd';

const {Meta} = Card;

const Cart = ({details,img,onClick,deleteBtn,infoBtn,updateBtn}) => {
    const {_id} = details

    return (
        <React.Fragment>
            <Card
                style={{width: 300}}
                cover={
                    <img
                        alt="omut"
                        src={img}
                    />
                }
                actions={[
                    deleteBtn ? <DeleteOutlined onClick={() => onClick({modal:"delete",id:_id})} key="delete"/>:"",
                    updateBtn ? <EditOutlined onClick={() => onClick({modal:"update",id:_id})} key="update"/> : "",
                    infoBtn ? <EllipsisOutlined onClick={() => onClick({modal:"info",id:_id})} key="info"/>:"",
                ]}
            >
                <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                    title={details.name}
                />
            </Card>
            {/*<Modal*/}
            {/*    title="Warning!!!"*/}
            {/*    open={isModalOpen}*/}
            {/*    onOk={() => (handleOk(_id), setIsModalOpen(false))}*/}
            {/*    onCancel={() => setIsModalOpen(false)}*/}
            {/*>*/}
            {/*    <p>Are you sure you want to delete the organization?</p>*/}
            {/*</Modal>*/}
        </React.Fragment>
    );
}

export default Cart;