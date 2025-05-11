<template lang="pug">
PageWithSidebar(:fixedHeader="false" :collapsible="false")
	template(#main)
		.col.center.full.layout--fullscreen
			div.layout-max-xs
				.block-no-bg.col.gap
					.prose
						h1.accent-text Sign Up
						p.text-600 Create your account to get started

					form.col.gap(@submit.prevent="handleSubmit")
						.block.col.gap
							label.text-sm.text-700(for="email") Email
							input.input.full(
								type="email"
								id="email"
								v-model="email"
								required
								placeholder="Enter your email"
							)

						.block.stack
							div
								label.text-sm.text-700(for="password") Password
								input.input.full(
									type="password"
									id="password"
									v-model="password"
									required
									placeholder="Create a password"
									minlength="8"
								)
							div
								label.text-sm.text-700(for="confirmPassword") Confirm Password
								input.input.full(
									type="password"
									id="confirmPassword"
									v-model="confirmPassword"
									required
									placeholder="Confirm your password"
									minlength="8"
								)

						button.btn-primary.full.bg-accent.text-white(type="submit" :disabled="isLoading")
							span(v-if="isLoading") Creating account...
							span(v-else) Create Account

					.row.center
						p.text-sm.text-600 Already have an account?
						a.text-sm.accent-text.ml-2(href="/demo/login") Log in
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import PageWithSidebar from '@/components/PageWithSidebar.vue'

const router = useRouter()
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLoading = ref(false)

const handleSubmit = async () => {
	if (password.value !== confirmPassword.value) {
		alert('Passwords do not match')
		return
	}

	try {
		isLoading.value = true
		// TODO: Implement actual signup logic here
		await new Promise(resolve => setTimeout(resolve, 1000)) // Simulated API call
		router.push('/login')
	} catch (error) {
		console.error('Signup failed:', error)
		alert('Failed to create account. Please try again.')
	} finally {
		isLoading.value = false
	}
}
</script>