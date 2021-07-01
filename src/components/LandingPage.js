import React from 'react'
import Header from './header';
import BodyContainer from './body-container';
import Faqdetail from './Faq-details';
import FooterPage from './FooterPage'

function LandingPage() {
    return (
        <div>
            <Header />
            <BodyContainer />
            <Faqdetail />
            <FooterPage />
        </div>
    )
}

export default LandingPage
