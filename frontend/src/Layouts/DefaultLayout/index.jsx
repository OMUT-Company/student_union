import React from "react";
import Header from "./Header"
import Footer from "./Footer"

const Wrap = (WrapComponent) => {
    return (props) => {
        return (
            <React.Fragment>

                <Header />
                <WrapComponent {...props} />
                <Footer />


            </React.Fragment>

        )
    }
}
export default Wrap