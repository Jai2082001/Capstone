import classes from './AboutUs.module.css'
import img from '../../img/aboutUs2.jpg'

const AboutUs = () => {
    return (
        <>

            <div className={classes.parentDiv}>
                <img src={img}></img>

                <div className={classes.overlayDiv}>
                    <h1>About us</h1>
                    <hr></hr>
                    <div className={classes.aboutusDiv}>
                        <p>
                            Duis posuere venenatis nunc quis sagittis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris imperdiet, quam in commodo tristique, nisi felis lacinia orci, a condimentum lectus dui malesuada mi. Sed euismod sit amet ligula a facilisis. Morbi sit amet vestibulum quam, sit amet faucibus ligula. Sed pretium, neque at ultrices iaculis, leo libero fermentum lacus, ac accumsan eros quam in erat. Praesent fringilla dignissim tortor id dignissim. Curabitur ornare ut sapien sed ultricies. Morbi euismod ante vitae nulla laoreet iaculis. Sed hendrerit turpis ac ipsum blandit ornare. Vestibulum sed sem ut lorem pretium ornare. Duis quam ex, sollicitudin vel sodales sed, pellentesque at nisl. Sed viverra tortor magna, non ullamcorper dolor consequat vitae. Vestibulum ullamcorper mi nec nulla accumsan, ac pulvinar neque porttitor.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed velit orci, dapibus ut tellus eget, consequat sodales lorem. Fusce ipsum ex, volutpat ac lacinia in, rutrum et mi. Nunc massa arcu, iaculis sit amet scelerisque a, sagittis quis quam. Aliquam erat volutpat. Praesent auctor sed quam id dapibus. Phasellus bibendum eget massa eu tincidunt. Morbi mi orci, dignissim vitae finibus in, bibendum id enim. Fusce quis nunc dapibus nisi dignissim sollicitudin. Suspendisse elementum, libero a congue auctor, mi lectus molestie ante, quis dictum lectus urna nec enim. Ut ultricies orci id neque vulputate tristique. Mauris euismod felis eget ex gravida, et venenatis lorem hendrerit. Fusce at leo urna. Duis ac ligula non ex dictum hendrerit sed in turpis. Nullam imperdiet quis odio ut ultricies. Integer hendrerit nunc justo, nec ullamcorper tellus interdum ut.
                        </p>
                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;