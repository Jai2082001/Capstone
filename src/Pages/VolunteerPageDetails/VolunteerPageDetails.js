import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import classes from './VolunteerPageDetails.module.css'
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const VolunteerDetails = () => {

    const params = useParams();
    const [volunteer, changeVolunteer] = useState(false)
    const [register, changeRegister] = useState(false);
    const [person, changePerson] = useState(false);
    const [loginMessage, changeLoginMessage] = useState(false);

    const history = useHistory();

    const user = useSelector((state) => {
        return state.user.user;
    })

    console.log(user);


    useEffect(() => {
        fetch(`${process.env.REACT_APP_FETCH_LINK}/detailVolunteer`, {
            headers: {
                'id': params.id
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            console.log(response)
            changeVolunteer(response);
        })
    }, [])

    



    const enrolledInfoHandler = () => {
        if (user._id) {
            // changeRegister(true);
            console.log('E')
            const dataObj = {};

            dataObj.nameid = volunteer._id;

            console.log(dataObj);

            fetch(`${process.env.REACT_APP_FETCH_LINK}/enrollVolunteer`, {
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
                console.log(response);
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
                    console.log('asdds')
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

        } else {
            // changeLoginMessage(true)
            toast("Please login first", {
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

    }

    console.log(volunteer)


    return (

        <>
            {/* <Modal style={{ zIndex: '5000' }} backdrop='static' show={loginMessage}>

                <Modal.Body>
                    Please Login First
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { changeLoginMessage(false) }} variant="secondary" >
                        Close
                    </Button>
                    <Button onClick={() => { changeLoginMessage(false) }} variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal> */}


            <div className={classes.parentDiv}>
                <div className={classes.imgDiv}>
                    <img src={volunteer.ImageUrl}></img>
                </div>
                <div className={classes.descDiv}>
                    <h1>{volunteer.EventName}</h1>
                    <h3>Organized by: - {volunteer.EventOrganization}</h3>
                    <h5>Present Members: - {volunteer.VolunteersNeed}</h5>
                    <h5>Capacity: - {volunteer.VolunteersPresent}</h5>
                    <Button onClick={enrolledInfoHandler}>Register Yourself</Button>
                </div>
              
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

            </div>

            <div  className={classes.eventDesc}>
                    {volunteer.EventDescription}
                </div>
        </>

    )
}

export default VolunteerDetails