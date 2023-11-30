import { useEffect } from 'react'
import { Card, ListGroup, Image } from 'react-bootstrap'
import { useState } from 'react';
import classes from './CardVol.module.css'
import { useHistory } from 'react-router';

const CardVol = ({ element }) => {


    const [shelters, changeShelters] = useState([]);

    const history = useHistory();


    const handler = () => {
        return (
            history.push(`/volunteerOppportunities/${element._id}`)
        )   
    }


    return (
        <div className={classes.ParentDiv}>
            <div>
                <Card onClick={handler} style={{'max-width': '450px'}}>
                    <Card.Img variant="top" />
                    <Card.Body>
                        <Card.Title>{element.JobTitle}</Card.Title>
                        <Card.Text>
                            <p>{element.SkillDescription}</p>
                            <p>{element.JobAvilability}</p>
                            <p>{element.JobDescription}</p>
                        </Card.Text>
                    </Card.Body>

                </Card>
            </div>
        </div>
    )
}

export default CardVol;