import React from 'react';
import './header.css';
import FormCard from './FormCard'
function headercontent() {
    return (
        <div className="card-detail">
            <div className="title hero-card">
                <h1>Unlimited movies, TV shows and more.</h1>
            </div>
            <div className="sub-title hero-card">
                <h2>Watch anywhere. Cancel anytime</h2>
            </div>
            <div>
                <FormCard />
            </div>
        </div>
    )
}

export default headercontent
