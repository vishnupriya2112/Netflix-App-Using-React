import React, { useState } from 'react'
import FaqCard from './Faq-card'
import FormCard from './FormCard'
import './faq-card.css';
import postData from '../data/faqs.json'

function Faq_details() {
    const [active, setActive] = useState("");
    return (
        <div className="faq-container">
            <div className="container">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                {
                    postData.map((data) => {
                        return (
                            <FaqCard className={`item${data.id}`}
                                id={data.id}
                                header={data.header}
                                body={data.body}
                                active={active}
                                setActive={setActive}
                            />
                        )
                    })
                }
            </div>
            <div className="form-content">
                <FormCard />
            </div>
        </div>
    )
}

export default Faq_details
