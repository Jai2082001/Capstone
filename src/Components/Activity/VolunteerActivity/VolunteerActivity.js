import { useEffect, useState } from "react"
import classes from './VolunteerActivity.module.css'
import { Card, ListGroup, Image } from 'react-bootstrap'

const VolunteerActivity = ({id}) => {

    const [volunteer, changeVolunteer] = useState(false);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/detailVolunteer`, {
            headers: {
                'id': id
            }
        }).then((response)=>{
            return response.json();
        }).then((response)=>{
            console.log(response);
            changeVolunteer(response);
        })
    }, [])
    
    return (
        <div className={classes.ParentDiv}>
        <div>
            <Card  style={{'max-width': '450px'}}>
                <Card.Img variant="top" />
                <Card.Body>
                    <Card.Title>{volunteer.EventName}</Card.Title>
                    <Card.Img src={volunteer.ImageUrl}></Card.Img>
                    <Card.Text>
                        Description {volunteer.EventDescription}
                    </Card.Text>
                    <Card.Text>
                        You can contact them on {volunteer.ContactInformation}
                    </Card.Text>
                    
                    
                </Card.Body>
                <Card.Body>
                    <Card.Link href="#"></Card.Link>
                    <Card.Link href="#"></Card.Link>
                </Card.Body>
            </Card>
        </div>
    </div>
    )
}

export default VolunteerActivity