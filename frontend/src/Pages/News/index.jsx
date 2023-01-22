import React from "react"
import Wrap from "../../Layouts/DefaultLayout"
import './style.scss'
import newsPhoto from '../../Assets/png/students.jpeg'




const News = () => {
    return (
        <div>
            <section className="news_header">
                <div className="overlay"></div>
                <img src={newsPhoto} alt="newsPhoto" />
                <p>
                    News
                </p>
            </section>
            <section className="news_body">
                <main class="page-content">
                    <div class="d_card">
                        <div class="content">
                            <h2 class="heading">Students renunion</h2>
                            <p class="data-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div class="d_card">
                        <div class="content">
                            <h2 class="heading">Coaches</h2>
                            <p class="data-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div class="d_card">
                        <div class="content">
                            <h2 class="heading">Workshops</h2>
                            <p class="data-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                    <div class="d_card">
                        <div class="content">
                            <h2 class="heading">Library</h2>
                            <p class="data-content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                        </div>
                    </div>
                </main>
            </section>
        </div>
    )
}
export default Wrap(News)