import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Alert } from 'react-bootstrap';
import classes from './Register.module.css'
import RegisterImg from '../../img/register.svg'
import Cookies from 'js-cookie'
import { Flip } from 'react-reveal';
import { useHistory } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';

const Login = ({ reload }) => {

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');
    const [country, changeCountry] = useState('');
    const [province, changeProvice] = useState('');
    const [city, changeCity] = useState('');
    const [name, changeName] = useState('');
    const [phone, changePhone] = useState('');


    const history = useHistory();


    const [message, changeMessage] = useState(false);

    const client_iD = '27898575177-28f8pfi0ib7vj524cat5s2k7jgte3q0e.apps.googleusercontent.com'


    const loginController = (e) => {
        e.preventDefault();
        console.log('clicked')
        // if(email)
        const validateEmail = (email) => {
            return String(email)
                .toLowerCase()
                .match(
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                );
        };

        const validPassword = (phone) => {
                return phone.length >= 8
        }

        const validPhone = (phone) => {
            let regex = /((\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}/g;
            return phone.match(regex);
        }


        if (!validateEmail(email)) {
            changeMessage({status: 'error', message: 'Enter a valid email'})
        }
        else if (!validPassword(password)) {
            changeMessage({status: 'error', message: 'The password should be of eight characters'});
        } else if (!validPhone(phone)) {
            
            changeMessage({status: 'error', message: 'Your phone number is not valid'})
        } else if (name.length < 2) {
            
            changeMessage({status: 'error', message: 'Please input a correct name'})
        } else if (country.length < 2) {
            changeMessage({status: 'error', message: 'Please input a correct country'})
        } else if (province.length < 2) {
            changeMessage({status: 'error', message: 'Please input a correct province'})
        } else if (city.length < 2) {
            changeMessage({status: 'error', message: 'Please input a correct city'})
        }else{
            const data = JSON.stringify({ email: email, password: password, phonenumber: phone, country: country, province: province, city: city, name: name });
            fetch(`${process.env.REACT_APP_FETCH_LINK}/register`, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: data
            }).then((res) => {
                return res.json();
            }).then((res) => {
                console.log(res);
                if (res.status == 'log in') {
                    Cookies.set('jwt', res.profile, { path: '/' })
                    history.push('/');
                    reload((prev) => {
                        let num = prev;
                        return num + 1;
                    })
                }
            })
        }

       
    }

    const logedIn = () => {
        history.push(`/login`)
    }

    return (
        <div className={classes.loginDiv}>
            <Form onSubmit={loginController} className={classes.formDiv}>
                <h4>Register</h4>

                <div className={classes.inputDiv}>
                    <Flip>
                        {message && 
                        <Alert variant={'danger'}>
                            {message.message}
                        </Alert>}

                    </Flip>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={name} onChange={(e) => { changeName(e.target.value) }} type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control value={phone} onChange={(e) => { changePhone(e.target.value) }} type="number" placeholder="Enter your Phone Number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Country</Form.Label>
                        <Form.Control value={country} onChange={(e) => { changeCountry(e.target.value) }} type="email" placeholder="Enter your country" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Province</Form.Label>
                        <Form.Control value={province} onChange={(e) => { changeProvice(e.target.value) }} type="text" placeholder="Enter your province" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>City</Form.Label>
                        <Form.Control value={city} onChange={(e) => { changeCity(e.target.value) }} type="text" placeholder="Enter the name of the city you live in" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} onChange={(e) => { changeEmail(e.target.value) }} type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => { changePassword(e.target.value) }} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                </div>
                <Button onClick={loginController} variant="primary" className={classes.submitBtn} type="submit">
                    Submit
                </Button>
                <Button onClick={logedIn}>Already Logged in</Button>


            </Form>
            <div className={classes.imgContainer}>
                <img src={RegisterImg}></img>
            </div>
        </div>
    )
}

export default Login