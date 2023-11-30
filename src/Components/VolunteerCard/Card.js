import { useEffect } from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { useState } from 'react';
import classes from './CardVol.module.css'
import { useHistory } from 'react-router';
import {ToastContainer, toast} from 'react-toastify';


const CardVol = ({ element }) => {


    const [shelters, changeShelters] = useState([]);

    const history = useHistory();

    console.log(element)

    const handler = () => {
        if(element.VolunteersNeed <= element.VolunteersPresent){
            toast('Sorry, the volunteer has reached its full capacity', {
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
                history.push(`/volunteerOppportunities/${element._id}`)
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
                <Card onClick={handler} style={{'max-width': '450px'}}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{element.EventName}</Card.Title>
                        <Card.Img src={element.ImageUrl}></Card.Img>
                        <Card.Text>{element.EventDescription.slice(0,150)} ...</Card.Text>
                    </Card.Body>
                    <Card.Body>
                      
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default CardVol;