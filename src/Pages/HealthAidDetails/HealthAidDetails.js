import classes from './HealthAidDetails.module.css';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import {Row, Col} from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingPage from '../LoadingPage/LoadingPage';



const HealthAidDetails = () => {

    const params = useParams();

    const [loading, changeLoading] = useState(false);
    const [volunteer, changeVolunteer] = useState(false);
    const user = useSelector((state) => {
        return state.user.user;
    })

    console.log(user);

    useEffect(() => {
        changeLoading(true);
        fetch(`${process.env.REACT_APP_FETCH_LINK}/detailHealth`, {
            headers: {
                'id': params.id
            }
        }).then((response) => {
            return response.json()
        }).then((response) => {
            changeLoading(false)
            changeVolunteer(response);
        })
    }, [])



    const enrolledInfoHandler = () => {

        const dataObj = {};

        dataObj.nameid = volunteer._id;

        if (user._id) {
            fetch(`${process.env.REACT_APP_FETCH_LINK}/enrollHealthAid`, {     method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                '_id': user._id

            },
            body: JSON.stringify(dataObj)}).then((response)=>{
                return response.json()                
            }).then((response)=>{
                if(response.status == 'good'){
                    toast("Registered", {
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
                }
            })
        } else {
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

        {loading && 
            <div>
                <LoadingPage></LoadingPage>
            </div>
        }
        {!loading && 
            <div className={classes.parentDiv}>
            <Row>
                <Col lg={'6'}>
                    <div className={classes.imgDiv}>
                        <img src={volunteer.ImageUrl}></img>
                    </div>
                </Col>
                <Col lg={'5'}>
                    <div className={classes.descDiv}>
                        <h1>{volunteer.HealthName}</h1>
                        <h3>Organized by: - {volunteer.HealthOrganization}</h3>
                        <Button onClick={enrolledInfoHandler}>Register Yourself</Button>
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
                </Col>

            </Row>

            <p>About the Program: -{volunteer.HealthProDescription}</p>

            <p style={{marginTop: '20px'}}>About the Organization: - {volunteer.HealthOrgDescription}</p>

        </div>
        }
        </>
    )
}

export default HealthAidDetails