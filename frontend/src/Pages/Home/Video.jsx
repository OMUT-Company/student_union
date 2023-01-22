import React from "react"
import './style.scss'
import video from '../../Assets/video/intro.mp4'
const Video = () => {
    const videoUrl = {
        url: { video},
        type: "video/mp4"
    }

    return (
        <div className="container">

            <video videourl={video} type={videoUrl.type} className="video" autoPlay muted loop>
                <source src={video} type={videoUrl.type} />

            </video>
            <h1 className="text">{"Where fun happens"}</h1>
        </div>
    )
}
export default Video