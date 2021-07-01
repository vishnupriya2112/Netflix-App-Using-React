import React from 'react'

function Footer({ name }) {
    return (
        <div>
            <a href="/signin">
                <span>{name}</span>
            </a>
        </div>
    )
}

export default Footer
