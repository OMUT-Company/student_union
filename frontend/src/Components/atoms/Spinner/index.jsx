import React from "react"
import "./style.scss"
const Spinner = ({loading}) =>{

    return(
        <React.Fragment>
            {
                loading &&
                <div className="spinner-container">
                    <span className="loader"></span>
                </div>
            }
        </React.Fragment>
    )
}
export default Spinner