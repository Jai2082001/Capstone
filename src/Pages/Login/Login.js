import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {GoogleLogin } from 'react-google-login'
import { useHistory } from 'react-router';

import {setCookie} from 'react-cookie'
import classes from './Login.module.css'
import Cookies from 'js-cookie'
import loginSvg from '../../img/login2.svg'

const Login = () => {

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState(''); 

    const history = useHistory();

    const client_iD = '27898575177-28f8pfi0ib7vj524cat5s2k7jgte3q0e.apps.googleusercontent.com'

    const successHolder = (response) => {
        console.log(response);
    }
    const onFailure = (response) => {
        console.log(response)
    }
    const loginController = (e) => {
        const data = JSON.stringify({email: email, password: password});
        e.preventDefault();
        fetch(`${process.env.REACT_APP_FETCH_LINK}/login`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: data
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            if(res.status == 'log in'){
                Cookies.set('jwt', res.profile, {path: '/'})
                history.push('/');
            }
        })
    }


    return (
        <div className={classes.loginDiv}>
        <Form onSubmit={loginController} className={classes.formDiv}>
            <h4>Login</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e)=>{changeEmail(e.target.value)}} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e)=>{changePassword(e.target.value)}} type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" className={classes.submitBtn} type="submit">
                Submit
            </Button>
            {/* <GoogleLogin
            clientId={client_iD}
            buttonText='Login'
            onSuccess={successHolder}
            onFailure={onFailure}
            isSignedIn={true}
            cookiePolicy={'single_host_origin'}
            >
            </GoogleLogin> */}
            
        </Form>
        <div className={classes.imgContainer}>
            <img src={loginSvg}></img>
        </div>
        </div>
    )
}

export default Login