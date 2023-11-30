import classes from './NewsHolder.module.css'
import { Row, Col, Spinner } from 'react-bootstrap';
import {  useState } from 'react';
import Fade from 'react-reveal/Fade'
import SmallRevealCard from '../SmallRevealCard/SmallRevealCard';

const NewsHolder = ({News}) => {
    // const [products, changeProducts] = useState([])

    const [loading, changeLoading] = useState(false);    
    console.log(News)
    
    const array = [1,2,3,4,5,6]

    return (
        <div className={classes.singleProductContainer }>
            <Row>
            {News.map((singleProduct)=> {
                return (
                    <Col className={classes.smallProductDisplay} xs={'12'} md={'4'} sm='6'>
                        <Fade>
                            <SmallRevealCard {...singleProduct}></SmallRevealCard>
                        </Fade>
                    </Col>
                )
            })}                
            </Row>
        </div>
    )
}

export default NewsHolder

