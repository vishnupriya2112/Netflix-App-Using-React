import React from 'react'

function Signin_form() {
    return (
        <div className="box">
            <form>
                <h1>Sign in</h1>
                <div>
                    <input type="text" />
                    <label>Email or phone number</label>
                </div>
                <div>
                    <input type="password" />
                    <label>Password</label>
                </div>
                <button className="signin-button">Sign in</button>
            </form>
            <ul className="flex-item">
                <li className="flex-item-content">
                    <input type="checkbox" className="largerCheckbox" defaultChecked /><span className="remember">Remember me</span>
                </li>
                <li className="flex-item-content">
                    <a className="help" href="/">Need help?</a>
                </li>
            </ul>
            <div className="social">
                <div className="icon">
                    <i class="fa fa-facebook-official" aria-hidden="true"></i>
                    <a href="/">Login with Facebook</a>
                </div>
                <h4 className="newuser">New to Netflix?<a href="/"> Sign up Now</a></h4>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.<span>Learn more.</span> </p>
            </div>
        </div>
    )
}

export default Signin_form
