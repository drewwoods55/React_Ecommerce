import React from 'react'
import HeroImg from "./closet.jpeg"
const hero = {
    backgroundImage: `url(${HeroImg})`
}


function Contact() {
    return(
        <main className="contact-container">
        <form className="content-box">
            <div className="left" style={hero}></div>
            <div className="right">
                <h2>Contact Us</h2>
                <input type="text" className="field" pattern="[A-Za-z]*" placeholder="Full Name" required/>
                <input type="email" className="field" placeholder="Email" required/>
                <input type="tel" className="field" placeholder="Ex: 704-444-4444" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                <textarea className="field" placeholder="Have any comments?"></textarea>
                <button className="contact-btn">Send</button>
            </div>
        </form>
    </main>
    )
}

export default Contact
