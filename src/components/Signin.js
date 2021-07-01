import React from 'react'
import SigninForm from './Signin-form'
import FooterList from './FooterList'
import postData from '../data/signin-footer.json'
import Dropdownbar from './dropdown-bar'
import LogoCard from './LogoCard'
import './Signin.css'
import './header.css'
import './Footer.css'

function Signin() {
    return (
        <div className="containers">
            <div className="container-wrapper">
                <div className='logo'>
                    <LogoCard />
                </div>
                <section className="signin-form-wrapper">
                    <div className="signin-form">
                        <SigninForm />
                    </div>
                </section>
                <div className="signin-footer">
                    <div className="footer" style={{ backgroundColor: "rgb(0, 0, 0,0.8)" }}>
                        <div className="footer-container">
                            <p className="phone">
                                Questions? Call
                                <a href="tel:000-800-040-1843 ">000-800-040-1843 </a>
                            </p>
                            <FooterList item={postData} />
                            <div style={{ width: "130px", marginTop: "20px" }}>
                                <Dropdownbar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
