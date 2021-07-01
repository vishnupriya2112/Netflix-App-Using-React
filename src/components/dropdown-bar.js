import React from 'react'
import './header.css';

function Dropdown_bar() {
    return (
        <div className="dropdown-menu">
            <select className="dropdown">
                <option value="english">English</option>
                <option value="hinfi">हिन्दी</option>
            </select>
        </div>
    )
}

export default Dropdown_bar
