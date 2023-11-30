import classes from './Footer.module.css'

const Footer = () => {
    return (
        <div className={classes.parentDiv}>
            <ul>
                <h4>Visit</h4>
                <li>
                    Home
                </li>
                <li>
                    About  us
                </li>
                <li>
                    Contact us
                </li>
            </ul>

            <ul>
                <h4>Our Services</h4>
                <li>Shelter Locator</li>
                <li>Volunteer Opportunities</li>
                <li>Donation Management</li>
                <li>Legal Aid and Access</li>
                <li>Health Care Access </li>
                <li>Job Listings</li>
                <li>Volunteer Opportunities</li>
                <li>Big brother Program</li>
            </ul>
            <ul>
                <h4>Our Social Media Handles</h4>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Youtube</li>

            </ul>
        </div>
    )
}

export default Footer