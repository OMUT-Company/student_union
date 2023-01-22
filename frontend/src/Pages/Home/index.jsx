import React, { useEffect } from "react"
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
    const data = [
        {
            index: 1,
            header: "Tree plantation",
            date: "01-05-23",
            description: "Area cleaning is being organized in Ararat territory",
            url:  plants 
        },
        {
            index: 2,
            header: "Work with animals",
            date: "01-05-24",
            description: "You can also volunteer for roles which don't involve working with animals, for example, many wildlife and animal charities need help organising events or with photography and fundraising.",
            url:  animals 
        },
        {
            index: 3,
            header: "community project",
            date: "01-05-25",
            description: "You can make a difference in your local area by donating just a few hours each week. From helping with a community-based recycling scheme through to providing support over local health issues, there are many ways to help.",
            url:  community 
        }
    ]
    const dispatch = useDispatch()

    useEffect(() => {
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