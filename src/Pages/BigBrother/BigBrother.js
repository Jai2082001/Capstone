import { useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import classes from './BigBrother.module.css'

const BigBrother = () => {

    const user = useSelector((state) => {
        return state.user.user;
    })

    const [country, changeCountry] = useState('');
    const [province, changeProvice] = useState('');
    const [city, changeCity] = useState('');
    const [name, changeName] = useState('');
    const [description, changeDescription] = useState('');
    const [phone, changePhone] = useState('');

    const imageRef = useRef();


    const loginController = (e) => {
        e.preventDefault();
        console.log('clicked');

        const files = imageRef.current.files;
        if (files.length > 0) {
            const delay = (file) => {
                return new Promise((resolve) => {
                    const fileReader = new FileReader();
                    fileReader.readAsDataURL(file)
                    fileReader.onload = function (event) {
                        resolve(event.target.result);
                    };
                })
            }
            const doNextPromise = (d) => {
                delay(files[d])
                    .then(x => {
                        // array.push(x);
                        d++;
                        if (d < files.length) {
                            doNextPromise(d)
                        }
                        else {
                            const fileReader = new FileReader();
                            const file = imageRef.current.files[0];

                            fileReader.readAsDataURL(file);
                            fileReader.onload = function (event) {
                                let date = new Date();
                                let dateText = date.toLocaleDateString();
                                let dataObj;

                                console.log(event.target.result);

                                dataObj = {
                                    phonenumber: phone, 
                                    country: country, 
                                    province: province, 
                                    description: description,
                                    city: city, 
                                    name: name,
                                    image: event.target.result
                                }
                                fetch(`${process.env.REACT_APP_FETCH_LINK}/saveCaseUser`, {
                                    method: "POST",
                                    cache: 'no-cache',
                                    credentials: 'same-origin',
                                    headers: {
                                        'Accept': 'application/json',
                                        "Content-Type": 'application/json',
                                        'addedby': 'Admin',
                                        id: user._id
                                    },
                                    body: JSON.stringify(dataObj)
                                }).then((response) => {
                                    return response.json()
                                }).then((response) => {
                                    console.log(response);
                                })
                            }
                        }

                    })

            }

            doNextPromise(0);

        }

        console.log(user)

        const data = JSON.stringify({});
        fetch(`${process.env.REACT_APP_FETCH_LINK}/caseSaveUser`, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                id: user._id
            },
            body: data
        }).then((response) => {
            return response.json();
        }).then((response) => {
            console.log(response);

        })
    }

    return (
        <>
            {user &&
                <div className={classes.bigDiv}>
                    <h3>Sign up people for our Big Brother program</h3>
                    <p>Enter the information of the candidate you want to help</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={name} onChange={(e) => { changeName(e.target.value) }} type="text" placeholder="Enter your Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={description} onChange={(e) => { changeDescription(e.target.value) }} type="text" placeholder="Enter some description" />
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
                        <Form.Group className='mb-3'>
                            <Form.Label>Insert a Profile image of the person</Form.Label>
                            <Form.Control type='file' accept={".jpeg, .gif, .png, .avif"} ref={imageRef} placeholder='Enter the image'></Form.Control>
                        </Form.Group>
                        <Button className={'mt-2 mb-2'} onClick={loginController} variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            }
        </>
    )

}

export default BigBrother;