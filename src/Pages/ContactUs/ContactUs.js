import classes from './ContactUs.module.css'
import img from '../../img/contactUs.jpg'
import {Phone, Mail as Email} from 'lucide-react'

const ContactUs = () => {
    return (
        <div className={classes.contactUs}>
            <div className={classes.contactUsDiv}>
            <div className={classes.contactDiv}>
                <h1>Get in Touch with us</h1>

            </div>
            <img src={img}></img>
            </div>
                <div className={classes.card}>
                    <div className={classes.contentDiv}>
                    <p><Phone /></p>
                        <p>Call us at</p>
                        <p>+1-437-522-6200</p>
                    </div>
                </div>
                <div className={classes.card1}>
                    <div className={classes.contentDiv1}>
                <p><Email /></p>
                        <p>Email us at</p>
                        <p>contact@homecarecompass.com</p>
                        </div>
                </div>
        </div>
    )
}

export default ContactUs;