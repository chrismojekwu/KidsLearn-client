import React from 'react';
import email from '../img/icons/email.png'
import github from '../img/icons/github.png'
import linkedin from '../img/icons/linkedin.png'
import insta from '../img/icons/insta.png'
import twitter from '../img/icons/twitter.png'
import soundcloud from '../img/icons/soundcloud.png'

function Footer() {
    return (
        <>
            <p className="footy-info">
                2020 - Christopher Mojekwu
            </p>
            <p className="socials">
                <a target="_blank" rel="noopener noreferrer" href="mailto:chrismojekwu@gmail.com">
                    <img className="icons" src={email} alt="Email Icon" role="link" title="Email Me"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/chrismojekwu">
                    <img className="icons" src={github} alt="Github Icon" role="link" title="Github"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopher-mojekwu-73a380126">
                    <img className="icons" src={linkedin} alt="Linkedin Icon" role="link" title="Linkedin"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mojek_/">
                    <img className="icons" src={insta} alt="Instagram Icon" role="link" title="Instagram"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mojekmojek">
                    <img className="icons" src={twitter} alt="Twitter Icon" role="link" title="Twitter"/></a>
                <a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/see-motion">
                        <img className="icons" src={soundcloud} alt="Soundcloud Icon" role="link" title="Soundcloud"/></a>

            </p>
        </>
    )
}

export default Footer;