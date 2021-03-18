// Using https://github.com/tipsi/tipsi-stripe

import stripe from 'tipsi-stripe';

// Aciano Stripe Test key
const stripePublishableKey = '';

// Merchant id for iOS
const merchantId = '';
const mode = 'test';
// const mode = 'production';

function getStripeObject() {

	var stripeConfig = {
		publishableKey: stripePublishableKey,
		androidPayMode: mode,
		merchantId: merchantId,
	};

	stripe.setOptions(stripeConfig);

	return stripe;

}

export default function createPaymentPromptForTask(price, currency = 'USD', quantity = '1', description = 'Not available') {

	const options = {
		total_price: price,
		currency_code: currency,
		line_items: [
			{
				currency_code: currency,
				description: description,
				total_price: price,
				unit_price: price,
				quantity: quantity,
			},
		],
	};

	const items = [
		{
			label: description,
			amount: price,
		},
	];

	return getStripeObject()
		.paymentRequestWithNativePay(options, items);

}

export function completePayment() {

	return stripe.completeNativePayRequest();

}

export function cancelPayment() {
	return stripe.cancelNativePayRequest();
}

export function userFriendlyError(error = '') {
	switch (error) {
		case 'This device does not support Apple Pay':
			return error;
			break;
		case 'Purchase was cancelled':
			return 'Couldn\'t complete payment process';
			break;
		default:
			return 'There was some error, please try again later.';
			break;
	}
}