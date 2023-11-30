import { useState, useRef, useEffect } from 'react'
import classes from './Profile.module.css'
import { useSelector } from 'react-redux'
import { Navbar, Container, Nav, Form, Button } from 'react-bootstrap'
import { Timeline, TimelineItem } from 'rsuite'
import Activity from '../../Components/Activity/Activity'
import Cookies from 'js-cookie';


const Profile = () => {

    const [page, changePage] = useState('i')

    const [cases, changeCases] = useState([]);

    const user = useSelector((state) => {
        return state.user.user;
    })

    useEffect(() => {
        console.log(user._id);
        fetch(`${process.env.REACT_APP_FETCH_LINK}/displayCasesUser`, {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',

                userid: Cookies.get('jwt')
            }
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);
            changeCases(response);
        })
    }, [])

    const nameRef = useRef();
    const phoneNumber = useRef();
    const country = useRef();
    const province = useRef();
    const city = useRef();
    const email = useRef();
    const password = useRef();


    const handler = (e) => {
        console.log(e.target)
        changePage(e.target.id);
    }

    return (
        <>
            {
                !user && <div>
                    <h2>You are not logged in</h2>
                </div>
            }

            {user &&
                <>
                    <div>
                        <Navbar bg="light" data-bs-theme="light">
                            <Container>
                                <Nav className="me-auto">
                                    <Nav.Link onClick={handler} id='i'>Edit Your Information</Nav.Link>
                                    <Nav.Link onClick={handler} id='f'>Your Activities</Nav.Link>
                                    <Nav.Link onClick={handler} id='c'>People you signed up for Big Brother Program</Nav.Link>
                                    <Nav.Link onClick={handler} id='l'>Log out</Nav.Link>
                                </Nav>
                            </Container>
                        </Navbar>
                    </div>

                    {
                        page == 'i' && <div>
                            <Form>
                                <Form.Group>
                                    <div className={classes.formBar}>
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' value={user.name}></Form.Control>
                                        <Form.Control type='text' ref={nameRef}></Form.Control>
                                    </div>
                                    <div className={classes.formBar}>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control type='text' value={user.phonenumber}></Form.Control>
                                        <Form.Control type='text' ref={phoneNumber}></Form.Control>
                                    </div>
                                    <div className={classes.formBar}>
                                        <Form.Label>Country</Form.Label>
                                        <Form.Control type='text' value={user.country}></Form.Control>
                                        <Form.Control type='text' ref={country}></Form.Control>
                                    </div>
                                    <div className={classes.formBar}>
                                        <Form.Label>Province</Form.Label>
                                        <Form.Control type='text' value={user.province}></Form.Control>
                                        <Form.Control type='text' ref={province}></Form.Control>
                                    </div>
                                    <div className={classes.formBar}>
                                        <Form.Label>City</Form.Label>
                                        <Form.Control type='text' value={user.city}></Form.Control>
                                        <Form.Control type='text' ref={city}></Form.Control>
                                    </div>
                                </Form.Group>
                                <p className='mb-2 ms-2 mt-2'>If you want to edit information change the information above and click this button</p>
                                <Button className='mb-2 ms-2 mt-2'>Click to Edit</Button>
                            </Form>


                        </div>
                    }
                    {
                        page == 'f' &&
                        <div>
                            <ul>
                                {user.enroll.length > 0 &&
                                    <div>
                                        {user.enroll.map((single) => {
                                            return (
                                                <Activity item={single}></Activity>
                                            )
                                        })}
                                    </div>
                                }
                                {!(user.enroll.length > 0) && <div>
                                    <h1>You have no recent activitiy</h1>
                                </div>}

                            </ul>
                        </div>
                    }

                    {
                        page == 'c' &&
                        <div className={classes.centerDiv}>
                            {cases.map((single) => {
                                return (
                                    <div className={classes.caseDiv}>
                                        <div className={classes.imgDiv}>
                                            <img src={single.imageUrl}></img>
                                        </div>
                                        <div className={classes.contentDiv}>
                                            <h3>{single.name}</h3>
                                            <h3>{single.description}</h3>
                                            <h3>{single.phonenumber}</h3>
                                            <h3>{single.city}, {single.province}, {single.country}</h3>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    }
                </>
            }


        </>
    )
}

export default Profile;