import React from 'react'
import './faq-card.css';


function Faq_card({ id, header, body, active, setActive }) {
    const mystyle = {
        backgroundColor: "rgb(63, 60, 60)",
        color: "white",
        cursor: "pointer",
        width: "100%",
        border: "none",
        outline: "none",
        marginTop: "3px",
        padding: "20px",
        fontSize: "24px",
        textAlign: "left",
        lineHeight: "1.3"
    };
    return (

        <div className="faq-card">
            <div className="card-text">

                <ul className="faq-list">
                    <li className="faq-list-item">
                        <div className="faq-question" onClick={() => setActive(id)} >
                            {header}
                            <span className="fas">
                                {active === id ? "x" : "+"}
                            </span>
                        </div>
                        <div id="faq-answer" className={`faq-answer` + (active === id ? "show" : "")} style={mystyle}>
                            {body}
                        </div>
                    </li>
                </ul>
            </div>
        </div >

    )
}

export default Faq_card