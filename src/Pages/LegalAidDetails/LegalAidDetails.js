import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router';
import { Button, Dropdown, Form, Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import classes from './LegalAidDetails.module.css'
import { useHistory } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LegalAidDetails = () => {

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
        fetch(`${process.env.REACT_APP_FETCH_LINK}/detailLegal`, {
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
        
        console.log('Event')
        const dataObj = {};

        dataObj.nameid = volunteer._id;

        console.log(dataObj);

        if(user._id){
            fetch(`${process.env.REACT_APP_FETCH_LINK}/enrollLegal`, {
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
        }else{
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


    return (

        <>
            <Modal style={{ zIndex: '5000' }} backdrop='static' show={loginMessage}>

                <Modal.Body>
                    Please Login First
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => { changeLoginMessage(false) }} variant="secondary" >
                        Close
                    </Button>
                    <Button onClick={() => { changeLoginMessage(false) }} variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
            
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


            <div className={classes.parentDiv}>
                <div className={classes.imgDiv}>
                    <img src={volunteer.ImageUrl}></img>
                </div>
                <div className={classes.descDiv}>
                    <h1>{volunteer.LegalOrgName}</h1>
                    <h3>Program By: - {volunteer.LegalProName}</h3>
                    <Button className='mt-2' onClick={enrolledInfoHandler}>Ask for Help</Button>
                </div>
            
               
            </div>
            <p>Legal Program Description: - {volunteer.LegalProDescription}</p>
                <p>Legal Organization Description: - {volunteer.LegalOrgDescription}</p>
        </>

    )
}

export default LegalAidDetails