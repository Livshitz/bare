<template lang="pug">
Page
	template(#main)
		.col.center.full.layout--fullscreen
			div.layout-max-xs
				.block-no-bg.col.gap
					.prose
						h1.text-accent Sign Up
						p.text-600 Create your account to get started

					form.col.gap(@submit.prevent="handleSubmit")
						.block.col.gap
							div
								label(for="email") Email
								input.input(
									type="email"
									id="email"
									v-model="email"
									required
									placeholder="Enter your email"
								)

						.block.row.col-xs
							div
								label(for="password") Password
								input.input(
									type="password"
									id="password"
									v-model="password"
									required
									placeholder="Create a password"
									minlength="8"
								)
							div
								label(for="confirmPassword") Confirm Password
								input.input(
									type="password"
									id="confirmPassword"
									v-model="confirmPassword"
									required
									placeholder="Confirm your password"
									minlength="8"
								)

						button.btn-primary.full.text-white(type="submit" :disabled="isLoading")
							span(v-if="isLoading") Creating account...
							span(v-else) Create Account

					.row.center.t-gap-2
						p.text-sm.text-600 Already have an account?
						router-link.text-sm.text-accent.ml-2(to="/demo/login") Log in

			div
				p.text-xs.center Make sure you agree to our&nbsp;
					router-link.text-accent(to="/demo/terms") Terms 
					span &nbsp;and&nbsp;
					router-link.text-accent(to="/demo/privacy") Privacy Policy
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Page from '@/components/Page.vue';

const router = useRouter();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const isLoading = ref(false);

const handleSubmit = async () => {
	if (password.value !== confirmPassword.value) {
		alert('Passwords do not match');
		return;
	}

	try {
		isLoading.value = true;
		// TODO: Implement actual signup logic here
		await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
		router.push('/login');
	} catch (error) {
		console.error('Signup failed:', error);
		alert('Failed to create account. Please try again.');
	} finally {
		isLoading.value = false;
	}
}
</script>