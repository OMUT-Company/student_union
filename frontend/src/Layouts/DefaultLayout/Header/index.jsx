import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import '../Header/style.scss'
import logo from '../../../Assets/png/logo2.png'
import { useTranslation } from "react-i18next"


const Header = () => {
    const { t, i18n } = useTranslation()
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }
    const [isMobile, setIsMobile] = useState(false)

    return (
        <nav className='navbar'>
            <NavLink to='/'>
                <div className="navbar-logo">
                    <img src={logo} alt="logo" />
                </div>
            </NavLink>
            <div className="toggle-button" onClick={() => setIsMobile(!isMobile)}>
                {isMobile ? <i class="fa-regular fa-xmark"></i> : < i class="fa-solid fa-bars" ></i >}
            </div>
            <div className={isMobile ? 'navLinksMobile' : 'navLinks'} >
                {/* <NavLink to='/about'>About Us</NavLink> */}
                <NavLink to='/news'>News</NavLink>
                <NavLink to='/events'>Investors & Charity</NavLink>
                <NavLink to='/faq'>FAQ</NavLink>
            </div>

            <div className='nav-section'>
                <p onClick={() => changeLanguage('ru')}>RU</p>
                <p onClick={() => changeLanguage('en')}>ENG</p>
                <p onClick={() => changeLanguage('am')}>AM</p>
            </div>

        </nav>


    )
}
export default Header

