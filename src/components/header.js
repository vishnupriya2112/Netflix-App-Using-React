import React from 'react'
import Headercard from './headercard';
import Headercontent from './headercontent';
import './header.css';
function header() {
    return (
        <div className='header'>
            <Headercard />
            <Headercontent />
        </div >
    )
}

export default header
