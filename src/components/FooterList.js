import React from 'react'
import Footer from './Footer'
import './Footer.css'

function FooterList(props) {
    return (
        <div className="main-container">
            {
                props.item.map((data) => {
                    return (
                        <Footer key={data.id} name={data} />
                    )
                })
            }
        </div>
    )
}

export default FooterList
