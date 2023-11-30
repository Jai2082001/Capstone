import image from '../../img/banner.avif'
import classes from './Hero.module.css'
import Container from 'react-bootstrap/esm/Container'
import { useState, useEffect } from 'react'
import { Fade, Flip } from 'react-reveal'
import ProductDisplayer from '../NewsDisplayer/NewsDisplayer'

const Hero = () => {

    const [blogs, changeBlogs] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/randomDisplay`).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            changeBlogs(response);
        })
    }, [])

    return (
        <Fade>
        <div className={classes.heroParentDiv}>
            <div className={classes.heroDiv}>
                <img src={image}></img>
                <div className={classes.overlay}>
                    <div className={classes.mission}>
                      <Fade top> <h1> Lets give everybody a home</h1></Fade>
                    
                    </div>
                </div>
            </div>
            <div className={classes.banner}>
                <Container fluid>

                    <ProductDisplayer></ProductDisplayer>


                </Container>
            </div>
        </div>
        </Fade>
    )
}

export default Hero;