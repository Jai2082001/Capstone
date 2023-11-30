import { useEffect, useState } from 'react'
import classes from './Payment.module.css'

const Payment = () => {

    useEffect(()=>{
        
    }, [])
    const initialOptions = {
        clientId: "test",
        currency: "USD",
        intent: "capture",
    };

    return (
        <div>

        </div>
    )
}

export default Payment