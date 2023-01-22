import React from "react"
import Wrap from "../../Layouts/DefaultLayout"
import OrganizationOfferForm from "../Home/OrganizationOfferForm"
import donateImg from '../../Assets/png/investors.jpeg'
import heart from '../../Assets/png/heart.jpeg'
import './style.scss'

const Volunteering = () => {
    return (
        <div>
            <div className="donation_header">
                <div> <img src={donateImg} alt="donation" /></div>
               
                <div className="donation_description">
                    <div className="donation_image">
                        <img src={heart} alt="heart" />
                    </div>
                    <div className="donation_content">
                       
                        <h3>Helping others is the responsibility of a human</h3>
                        <h3>In cases where you think that you should volunteer but are too busy to sh3end time towards the betterment of a cause, you can donate money. Money is just a workaround for a time as it helps the organizations to acquire more resources that can improve the cause.</h3>
                    </div>
                </div>
            </div>
            <p className="headerOrg">If you want to make a difference and contribute,you can frill out this form</p>
            <div className="organization_form">
                <OrganizationOfferForm />
            </div>
        </div>
    )
}
export default Wrap(Volunteering)