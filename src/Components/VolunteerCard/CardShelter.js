import { useEffect } from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { useState } from 'react';
import classes from './CardShel.module.css'
import { useHistory } from 'react-router';
import {ToastContainer, toast} from 'react-toastify';

const CardVol = ({ element }) => {

    const history = useHistory();;
    const [shelters, changeShelters] = useState([]);

    const handler = () => {
        if(element.ResidentCapacity <= element.ResidentPresentMember){
            toast('Sorry, the shelter has reached its full capacity', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }else{
            return (
                history.push(`/shelterLocator/${element._id}`)
            )
        }
        
    }

    return (
        <div className={classes.ParentDiv}>
             <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            <div>
                <Card onClick={handler}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{element.ShelterName}</Card.Title>
                        <Card.Img src={element.ImageUrl}></Card.Img>
                        <Card.Text>
                            {element.EventDescription}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        {element.ShelterDescription}
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CardVol;