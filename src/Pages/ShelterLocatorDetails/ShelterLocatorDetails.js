import { useEffect, useState, useRef } from 'react'
import classes from './ShelterLocator.module.css'
import { useParams } from 'react-router';
import { Button, Dropdown, Form, Modal} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Activity from '../../Components/Activity/Activity';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ShelterLocatorDetails = () => {
 
    const params = useParams();         
    const [shelter, changeShelter] = useState(false)
    const [enroll, changeEnroll] = useState(false);
    const [person, changePerson] = useState(false);
    const [loginMessage, changeLoginMessage] = useState(false);



    const nameRef = useRef();
    const accRef = useRef();
    const longRef = useRef();

    const user = useSelector((state) => {
        return state.user.user;
    })

    console.log(user);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/detailshelter`, {
            headers: {
                'id': params.id
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response)
            changeShelter(response)
        })
    }, [])



    const enrollHandler = () => {
        if(user._id){
            changeEnroll(true);
        }else{
            toast('You are not logged in', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                })
        }
    }

    const enrolledInfoHandler = () => {

        console.log('Event')
        const dataObj = {};

        if(person == 'For Yourself'){
            dataObj.person = person;
            dataObj.nameid = shelter._id
            
        }else{
            dataObj.name = nameRef.current.value;
            dataObj.adddress = accRef.current.value;
            dataObj.long = longRef.current.value;
            dataObj.person = person;
            dataObj.nameid = shelter._id
            
        }
        

        console.log(dataObj);

        fetch(`${process.env.REACT_APP_FETCH_LINK}/enrollShelter`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                '_id': user._id

            },
            body: JSON.stringify(dataObj)
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.status == 'error'){
                toast(response.message, {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }else{
                toast('Registered', {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        })
    }

    console.log(shelter)


    return (

        <>
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
    <Modal style={{zIndex: '5000'}} backdrop='static' show={loginMessage}>

                <Modal.Body>
                    Please Login First
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={()=>{changeLoginMessage(false)}} variant="secondary" >
                        Close
                    </Button>
                    <Button onClick={()=>{changeLoginMessage(false)}} variant="primary">Understood</Button>
                </Modal.Footer>
        </Modal>
        {
            !shelter.status && <>
             {enroll &&
                <div className={classes.enrollDiv}>
                    <Dropdown data-bs-theme='dark'>
                        <Dropdown.Toggle id="" variant='primary'>
                            For Who ?
                        </Dropdown.Toggle>
                        <Dropdown.Menu onSelect={() => { }}>
                            <Dropdown.Item onClick={() => { changePerson('For Yourself') }}>Register Yourself</Dropdown.Item>
                            <Dropdown.Item onClick={() => { changePerson('For Someone else') }}>Register Someone Else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {(person && person == "For Someone else") &&

                        <div>
                            <p>{person}</p>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Name of the Shelter Seeker</Form.Label>
                                    <Form.Control ref={nameRef} placeholder="Enter the name of the shelter" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Any other accomodation's address, if you have</Form.Label>
                                    <Form.Control ref={accRef} placeholder="Enter any other accomodation's address, if you have" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Needed for how long, leave for definite period</Form.Label>
                                    <Form.Control ref={longRef} type="text" placeholder="How long do you want to stay" />
                                </Form.Group>
                                <Button onClick={enrolledInfoHandler}>Sign up for the Shelter Space</Button>
                            </Form>
                        </div>
                    }
                    {
                        (person && person == "For Yourself" && <button>
                            <Button onClick={enrolledInfoHandler}>Sign up for the shelter space for yourself</Button>
                        </button>)
                    }
                </div>}
            {!enroll &&
            <>
                <div className={classes.parentDiv}>
                    <div className={classes.imgDiv}>
                        <img src={shelter.ImageUrl}></img>
                    </div>
                    <div className={classes.descDiv}>
                        <h1>{shelter.ShelterName}</h1>
                        <h3>Organized by: - {shelter.ShelterCompany}</h3>
                        <h5>Present Members: - {shelter.ResidentPresentMember}</h5>
                        <h5>Capacity: - {shelter.ResidentCapacity}</h5>
                        <Button onClick={enrollHandler}>Enroll now</Button>
                    </div>
                </div>
                <div className={classes.eventDesc}>
                    <p>{shelter.ShelterDescription}</p>
                </div>
                </>
            }
            </>    
        }
{
    shelter.status && 
    <h1>The opportunity does not exist anymore</h1>
}
           
        </>

    )
}

export default ShelterLocatorDetails