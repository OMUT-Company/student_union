import React, { useRef } from 'react'

const AccordionItem = (props) => {

    const contentEl = useRef();
    const {handleToggle, active, faq} = props;
    const {header, id, text} = faq

    return (
        <React.Fragment>

            <div className="rc-accordion-card">
                <div className="rc-accordion-header">
                    <div className={`rc-accordion-toggle ${active === id ? 'active' : ''}`}
                         onClick={() => handleToggle(id)}>
                        <h5 className="rc-accordion-title">{header}</h5>
                        <i className="fa fa-chevron-down rc-accordion-icon"></i>
                    </div>
                </div>
                <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
                    active === id
                        ? {height: contentEl.current.scrollHeight}
                        : {height: "0px"}
                }>
                    <div className="rc-accordion-body">
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default AccordionItem