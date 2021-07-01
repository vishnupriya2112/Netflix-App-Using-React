import React from 'react'
import './header.css'
import Link from './Link'
import Dropdownbar from './dropdown-bar'
import LogoCard from './LogoCard'
function headercard() {
    return (
        <div className='main'>
            <div className='logo'>
                <LogoCard />
            </div>
            <div className='nav-bar'>
                <Dropdownbar />
                <div className="signin">
                    <Link className="ui button red" href='/signin'>
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default headercard
