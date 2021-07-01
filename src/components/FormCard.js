import React from 'react'
import './header.css';

function FormCard() {
    return (
        <div className="form-box">
            <form className="email-form">
                <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                <div className="email-form-content">
                    <div className="field inputHolder">
                        <input type="email" name="email" className="inputText" />
                        <label>Email Address</label>
                    </div>
                    <div className="field">
                        <input type="submit" value="Get Started" />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default FormCard
