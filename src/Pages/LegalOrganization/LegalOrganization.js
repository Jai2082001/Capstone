import { useEffect } from 'react'
import LegalAid from '../../Components/LegalAid/LegalAid';
import classes from './LegalOrganization.module.css'
import { useState } from 'react';
import Slider from 'react-slick'
import { Row, Col } from 'react-bootstrap'
import LoadingPage from '../LoadingPage/LoadingPage';

const LegalOrganization = () => {

    const [loading, changeLoading] = useState(false);
    const [legal, changeLegal] = useState([]);



    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 890,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    useEffect(() => {
        changeLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_LINK}/displayLegalOrgs`).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            changeLoading(false);
            changeLegal(response);
        })
    }, [])

    return (
        <>

            {loading && 
                <LoadingPage></LoadingPage>
            }
            {!loading && 
                <div>

                {legal.length > 0 &&
                    <>
                        <Row className={classes.parentDiv}>
                            {legal.map((single) => {
                                return (
                                    <Col lg={'9'}>
                                        <LegalAid legal={single}></LegalAid>
                                    </Col>
                                )
                            })}
                        </Row>


                    </>
                }
            </div>
            }
            
        </>

    )
}

export default LegalOrganization