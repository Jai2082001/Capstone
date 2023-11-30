import { useEffect, useState } from "react"
import classes from './LegalActivity.module.css'
import { Card, ListGroup, Image } from 'react-bootstrap'

const VolunteerActivity = ({id}) => {

    const [volunteer, changeVolunteer] = useState(false);

    useEffect(()=>{
        fetch(`${process.env.REACT_APP_FETCH_LINK}/detailLegal`, {
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
                    <Card.Title>{volunteer.LegalProName}</Card.Title>
                    <Card.Img src={volunteer.ImageUrl}></Card.Img>
                    <Card.Text>
                        Description {volunteer.LegalProDescription}
                    </Card.Text>
                    <Card.Text>
                        You can contact them on {volunteer.ContactInfo}
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