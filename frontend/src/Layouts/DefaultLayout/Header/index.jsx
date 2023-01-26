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
    let data = i18n.t('navigation');
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
            <div className={isMobile ? 'navLinksMobile' : 'navLinks'}>
                {/* <NavLink to='/about'>About Us</NavLink> */}
                    <NavLink to='/news'>{i18n.t("navigation.news",data)}</NavLink>
                    <NavLink to='/events'>{i18n.t("navigation.investors",data)}</NavLink>
                    <NavLink to='/faq'>{i18n.t("navigation.faq",data)}</NavLink>
            </div>

            <div className='nav-section'>
                <button onClick={() => changeLanguage('ru')}>RU</button>
                <button onClick={() => changeLanguage('en')}>ENG</button>
                <button onClick={() => changeLanguage('am')}>AM</button>
            </div>

        </nav>


    )
}
export default Header

