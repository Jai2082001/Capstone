import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import Donation from "./Donation"

const PUBLIC_KEY = "pk_test_51OFUw0D3YcTy0vq0CPYCpWQ58MiX8GwCw62vZnAiTNsVrezAGOR5oSdiDEk70sgJhSyLi9psOCBstNpOSyHGd6nr00UHAwoirx"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<Donation></Donation>
		</Elements>
	)
}