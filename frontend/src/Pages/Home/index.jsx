import React, { useState, useEffect } from "react"
import Wrap from "../../Layouts/DefaultLayout"
import Video from "./Video"
import './style.scss'
import { useDispatch } from "react-redux";
import { applyAnEvent, getEvents, organizationOffer, volunteerApply } from "../../Store/Content/contentSlice";
import { Button, ConfigProvider, Form, Input, Select } from "antd";
import { png } from "../../Assets/png";
import useWindowSize from "../../Hooks/uswWindowSize";
import JoinUs from "./JoinUs";
import OrganizationOfferForm from "./OrganizationOfferForm";
import Card from "../../Components/atoms/card";
import animals from '../../Assets/png/home/animals.jpeg'
import plants from '../../Assets/png/home/plantation.jpeg'
import community from '../../Assets/png/home/community.jpg'


const Home = () => {
    
    const dispatch = useDispatch()

    const [data, setData] = useState([]);

    useEffect(() => {
            fetch('http://localhost:5000/api/event',{method : 'POST' ,headers:{'content-type': 'application/json','Authorization' : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzNzEyNTFkZjAzMjM5ZTY4MDAwMDAzMyIsImlhdCI6MTY3NDY3NzIxOSwiZXhwIjoxNjc3MjY5MjE5fQ.GNVGtdzDiiUMlaR9KBXWueldK0uCZaGU0t9SbnXiNy8'}})
        .then(res => { console.log({data:[... res.data]})})
    // const dispatch = useDispatch()
        // dispatch(getEvents())

        // dispatch(organizationOffer(
        //     {
        //         name: "Ino",
        //         director: "Artur",
        //         address:"adfbadf",
        //         number: "374930104",
        //         email:"gmail.com",
        //         message:"hello my friend"
        //     }
        // ))

        // dispatch(volunteerApply(
        //     {
        //         "name":"Artur",
        //         "surname":"Araqelyan",
        //         "age":227,
        //         "gender":"female",
        //         "phoneNumber":"+37493021372",
        //         "email":"artur.a@gmail.com",
        //         "previouslyApplied":false
        //     }
        // ))

        // dispatch(applyAnEvent({
        //     "eventId":"639f749130e7ea74d5ae3b60",
        //     "name":"Artur",
        //     "surname":"Araqelyan",
        //     "age":27,
        //     "gender":"male",
        //     "phoneNumber":"+37493021372",
        //     "email":"artur.araqedsdlyansv1995@gmail.com",
        //     "previouslyApplied":false
        // }))
    }, [])


    return (
        <React.Fragment>
            <Video />
            <div className="events-container wrapp">
                <section className="about-union">
                    <h3>Hello👋 We are OMUT <br /> Oriented Motivated Unique Thinkers.</h3>
                    <p>
                        What we do? We provide any kind of support to our students, we do charity work, we play and have fun. If you are a student and want to join our friendly community visit us and fill in the form. For more information, please visit FAQ section or call us directly. We need you in our team 🙂
                    </p>
                </section>
                <section className="about-text">
                    <h3 className="events-header btn-shine">
                        New Events
                    </h3>
                    <div className="cardGallery">
                        {data.map((item) => <Card key={item.index} header={item.header} date={item.date} description={item.description} url={item.url} />
                        )}
                    </div>



                </section>

                <JoinUs />
            </div>

        </React.Fragment>
    )
}


export default Wrap(Home)