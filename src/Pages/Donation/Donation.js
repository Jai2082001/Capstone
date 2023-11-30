import classes from './Donation.module.css';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { useHistory } from 'react-router'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useSelector } from 'react-redux';
import axios from 'axios';

const Donation = () => {

    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#000",
                color: "#000",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": { color: "#fce883" },
                "::placeholder": { color: "#000" }
            },
            invalid: {
                iconColor: "red",
                color: "red"
            }
        }
    }
    const user = useSelector((state) => {
        return state.user.user;
    })

    const [donate, changeDonate] = useState(0);
    const [success, setSuccess] = useState(false);
    const [order, setOrderID] = useState(false);
    const stripe = useStripe()
    const elements = useElements()
    const history = useHistory();

    const public_key = 'pk_test_51OFUw0D3YcTy0vq0CPYCpWQ58MiX8GwCw62vZnAiTNsVrezAGOR5oSdiDEk70sgJhSyLi9psOCBstNpOSyHGd6nr00UHAwoirx'

    const stripeTestPromise = loadStripe(public_key);

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('adsd')
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                const { id } = paymentMethod
                const response = await axios.post("http://localhost:3001/donation", {
                    amount: donate,
                    id,
                    user_id: user._id
                })
                console.log(response)
                if (response.data.status == 'good') {
                    console.log("Successful payment")
                    setSuccess(true)
                }

            } catch (error) {
                console.log("Error", error)
            }
        } else {
            console.log(error.message)
        }
    }



    console.log(donate)

    return (

        <div className={classes.parentDiv}>
            <h1>Donate to our organization and we will give forward where it needs</h1>

            <div className={classes.Donation}>
                <div className={classes.donationChild}>
                    {!success &&
                        <>
                            <Form.Group className="mb-3 mt-3" controlId="formBasicEmail">
                                <Form.Label>Donate here</Form.Label>
                                <Form.Control value={donate} onChange={(e) => { changeDonate(parseInt(e.target.value)) }} type="number" placeholder="Enter the Amount" />
                            </Form.Group>

                            <form onSubmit={handleSubmit}>
                                <fieldset className="FormGroup">
                                    <div className="FormRow">
                                        <CardElement options={CARD_OPTIONS} />
                                    </div>
                                </fieldset>
                                <button>Pay</button>
                            </form>
                        </>
                    }
                    {success &&
                        <p>Thank you for making the donation</p>
                    }

                </div>
            </div>
        </div>

    )
}

export default Donation;