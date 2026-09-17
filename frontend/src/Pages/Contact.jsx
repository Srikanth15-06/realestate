import React from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import ContactDetails from '../Components/ContactDetails'
import ContactReviewSection from '../Components/ContactReviewSection'
import ContactBG from '../Components/ContactBG'

const Contact = () => {
    return (
        <div>
            <div className="sticky top-0 z-50">
                <Header />
            </div>
            <ContactBG />
            <ContactDetails />
            <ContactReviewSection />
            <Footer />
        </div>
    )
}

export default Contact
