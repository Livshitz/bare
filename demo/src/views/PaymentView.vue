<template lang="pug">
Page
	template(#main)
		.col.center.full
			div.layout-max-xs
				.block-no-bg.col.gap
					.prose
						h1.text-accent Payment Details
						p.text-600 Enter your card information to proceed

					form.col.gap(@submit.prevent="handleSubmit")
						.block.col.gap
							div
								label(for="cardNumber") Card Number
								input.input(type="text" id="cardNumber" v-model="cardNumber" required placeholder="1234 5678 9012 3456" maxlength="19")
							div
								label(for="expiry") Expiry (MM/YY)
								input.input(type="text" id="expiry" v-model="expiry" required placeholder="MM/YY" maxlength="5")
							div
								label(for="cvc") CVC
								input.input(type="text" id="cvc" v-model="cvc" required placeholder="CVC" maxlength="4")
							div
								label(for="cardholder") Cardholder Name
								input.input(type="text" id="cardholder" v-model="cardholder" required placeholder="Name on card")

						button.btn-primary.full.text-white(type="submit" :disabled="isLoading")
							span(v-if="isLoading") Processing...
							span(v-else) Pay Now

			div
				p.text-xs.center
					| By proceeding, you agree to our&nbsp;
					router-link.text-accent(to="/demo/terms") Terms
					span &nbsp;and&nbsp;
					router-link.text-accent(to="/demo/privacy") Privacy Policy
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Page from '@/components/Page.vue';

const router = useRouter();
const cardNumber = ref('');
const expiry = ref('');
const cvc = ref('');
const cardholder = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
	if (!/^\d{16,19}$/.test(cardNumber.value.replace(/\s+/g, ''))) {
		alert('Please enter a valid card number.');
		return;
	}
	if (!/^\d{2}\/\d{2}$/.test(expiry.value)) {
		alert('Please enter a valid expiry date (MM/YY).');
		return;
	}
	if (!/^\d{3,4}$/.test(cvc.value)) {
		alert('Please enter a valid CVC.');
		return;
	}
	if (!cardholder.value.trim()) {
		alert('Please enter the cardholder name.');
		return;
	}

	try {
		isLoading.value = true;
		// TODO: Implement actual payment logic here
		await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
		alert('Payment successful!');
		router.push('/');
	} catch (error) {
		console.error('Payment failed:', error);
		alert('Failed to process payment. Please try again.');
	} finally {
		isLoading.value = false;
	}
}
</script> 