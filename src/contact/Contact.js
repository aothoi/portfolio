import "./Contact.css"
import {HiMail} from "react-icons/hi"
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import logo from "./logo512.png"

export const Contact = () => {
  return (
    <div id="contact" className="contactMain">
        <p className="head"><span>04.</span> Let's Get In Touch</p>
        <div className="contactCard">
            <div className="email">
                <HiMail className="emailIcon"/>
                <p>mehzabin.aothoi1@gmail.com</p>
            </div>
            <div className="socials">
                <p>Connect With Me</p>
                <a href="https://www.linkedin.com/in/mehzabin/" target="_blank" rel="noreferrer"><BsLinkedin className="licon"/></a>
                <a href="https://github.com/suppaGonzal0" target="_blank" rel="noreferrer"><AiFillGithub className="gicon"/></a>
            </div>
        </div>
        <div className="footer">
            <p>Made With</p>
            <img src={logo} alt="logo"/>
            <p><a href="https://github.com/suppaGonzal0/portfolio" target="_blank" rel="noreferrer">Source Code</a> By Mehzabin Sadat Aothoi</p>
        </div>
    </div>
  )
}