import React from 'react'
import Dropdownbar from './dropdown-bar'
import FooterList from './FooterList'
import postData from '../data/footer.json'
import './header.css'
import './Footer.css'

export default function FooterPage() {
    return (
        <div className="footer">
            <div className="footer-container">
                <p className="phone">
                    Questions? Call
                    <a href="tel:000-800-040-1843 ">000-800-040-1843 </a>
                </p>
                <FooterList item={postData} />
                <div style={{ width: "90px", marginTop: "20px" }}>
                    <Dropdownbar />
                </div>
                <div style={{ marginTop: "20px", color: "#757575" }}>
                    <p>Netflix India</p>
                </div>
            </div>
        </div>
    )
}
