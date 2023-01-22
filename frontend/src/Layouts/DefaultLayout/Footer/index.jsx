import { Link } from "react-router-dom"
import '../Footer/style.scss'
import logo from "../../../Assets/png/logo2.png";

const Footer = () => {
    return (
        <footer>
            <div className="wrapper">
                <section className="footer__about">
                    <div className="footer__logo">
                        <Link to ='/' >
                            <img src={logo} alt="logo" />
                            </Link>
                    </div>
                    <p>Oriented, Motivated, Unique Thinking.</p>
                </section>
                <section className="footer__info">
                    <div className="footer__contact">
                        <h5>Contact Information</h5>
                        <p>Halabyan 2</p>
                        <a>hakobyang899@gmail.com</a>
                        <a>+374 66 66 66</a>
                    </div>
                </section>
                <div>
                    <Link to='/faq'>FAQ</Link>
                </div>
            </div>
            <hr />
            <section className="credentials wrapper ">

                <p><i class="fa-regular fa-copyright"></i>Made by OMUT Company</p>

                <ul className="social-links">
                    <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-whatsapp"></i></a></li>
                </ul>

            </section>
        </footer >
    )
}
export default Footer