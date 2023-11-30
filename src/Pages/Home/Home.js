import Hero from "../../Components/Hero/Hero";
import { VerticalTimeline, WorkIcon, VerticalTimelineElement, SchoolIcon, StarIcon } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import classes from './Home.module.css'
import Vision from '../../img/vision.avif'
import { useHistory } from "react-router-dom";


const Home = () => {

    const history = useHistory();

    const handler = (e) => {
        
    }

    const exploreMore = (e) => {
        history.push(`/${e.target.id}`)

    }

    return (
        <div className={classes.parentDiv}>
            <Hero></Hero>
            <div className={classes.timelineDiv}>
                <h1 className={classes.ideaHeading}>Our Ideas</h1>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        
                        className="vertical-timeline-element--work hoverThing"
                        contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                        iconStyle={{ background: 'rgb(159,159,159)', color: '#fff' }}

                    // icon={<WorkIcon />}
                    >
                        <div>
                            <h3 className="vertical-timeline-element-title">Shelter Locator</h3>
                            <p>
                                A simple component to help the folks locate a shelter near them
                            </p>
                            <button className={classes.timelineBtn} id='shelterLocator' onClick={exploreMore}>Explore More</button>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    onClick={handler}
                    
                        contentStyle={{ background: 'rgb(255,255,255)', color: '#000' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(158, 158, 158)' }}
                        className="vertical-timeline-element--work hoverThing"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Donation Management</h3>
                        <p>
                            A portal which enables you to donate to the cause you want to.
                        </p>
                        <button  className={classes.timelineBtn } id='donate' onClick={exploreMore}>Explore More</button>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    onClick={handler}
                        
                        
                        className="vertical-timeline-element--education hoverThing"
                        iconStyle={{ background: 'rgb(0, 0,0 )', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Volunteer Opportunities</h3>
                        <p>
                            Want to contribute by doing some volunteer work, we have all the information regarding that.
                        </p>
                        <button  className={classes.timelineBtn } id='volunteerOpportunities' onClick={exploreMore}>Explore More</button>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    onClick={handler}
                        
                        
                        className="vertical-timeline-element--work hoverThing"
                        contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                        iconStyle={{ background: 'rgb(157, 158, 158)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Legal Aid and Access</h3>
                        <p>
                            A simple feature which allows you to see all the legal aid you want to help someone, leading organization have partnered with us to contribute.
                        </p>
                        <button className={classes.timelineBtn }  id='legalAid' onClick={exploreMore}>Explore More</button>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    onClick={handler}
                        
                        
                        className="vertical-timeline-element--work hoverThing"
                        iconStyle={{ background: 'rgb(0, 0, 0)', color: '#fff' }}
                    // icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Health Care Access</h3>
                        <p>
                            Big names of healthcare access contribute to the cause, and you can learn more about that.
                        </p>
                        <button  className={classes.timelineBtn } id="healthAid" onClick={exploreMore}>Explore More</button>

                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                    onClick={handler}
                        
                        className="vertical-timeline-element--education hoverThing"
                        contentStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(0, 0, 0)' }}
                        iconStyle={{ background: 'rgb(158, 158, 158)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Job Listings</h3>
                        <p>
                            To ensure stability, we have dedicated portal for jobs listed by organizations and goverments.
                        </p>
                        <button  className={classes.timelineBtn } onClick={exploreMore}>Explore More</button>

                    </VerticalTimelineElement>
                    
                    <VerticalTimelineElement
                    onClick={handler}
                        
                        className="vertical-timeline-element--education hoverThing"
                        iconStyle={{ background: 'rgb(158, 158, 158)', color: '#fff' }}
                    // icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Big brother program</h3>
                        <p>
                            Sign up for our big brother program, and take care of someone who could use your mentoring,
                        </p>
                        <button  className={classes.timelineBtn } onClick={exploreMore}>Explore More</button>

                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>

            <div className={classes.backgroundVision}>
                <hr></hr>
                <h1>Our Vision</h1>
                <div className={classes.visionDiv}>
                    <div className={classes.imgDiv}>
                            <img src={Vision}>
                            </img>

                        <div className={classes.decDiv}>

                        </div>
                    </div>
                    <div className={classes.contentDiv}>
                        <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home;