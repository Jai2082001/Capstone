import classes from './OurVision.module.css'
import img from '../../img/aboutus.jpg'


const OurVision = () => {
    return (
        <div className={classes.ourVisionParent}>
            <h1>Become a contributor</h1>
            <div className={classes.imageDiv}>
                <img src={img}></img>
                <div>
                    Join forces with our NGO focused on homelessness and become a corporate contributor in driving impactful change. By partnering with us, your company can play a pivotal role in transforming the lives of those facing housing insecurity. Your support goes beyond financial contributions; it signifies a commitment to social responsibility and tangible action. Through our collaborative efforts, we can provide vital resources, shelter, education, and employment opportunities to those in need, while also advocating for systemic changes. Together, we'll make a lasting difference, showcasing your company's dedication to creating a world where everyone has a place to call home. Partner with us and be a catalyst for meaningful change in our communities.
                </div>
                <div className={classes.imageDiv1}>

                </div>
            </div>
        </div>
    )
}

export default OurVision;