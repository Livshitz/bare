<template lang="pug">
Page(:fixedHeader="false" :collapsible="false")
	//- template(#header)
		.title.lighter Login

	//- template(#sidebar)
		.block.col.gap
			.label.t-mb-2 Quick Links
			.stack-sm
				a.btn-ghost.row.start(href="#") Help Center
				a.btn-ghost.row.start(href="#") Privacy Policy
				a.btn-ghost.row.start(href="#") Terms of Service

	template(#main)
		.col.center.full.layout--fullscreen
			div.layout-max-xs
				.block-no-bg.col.gap
					.prose
						h1.text-accent Welcome Back
						p.text-600 Please sign in to continue

					form.col.gap(@submit.prevent="handleSubmit")
						.block.col.gap
							label(for="email") Email
							input#email.input(
								type="email"
								placeholder="Enter your email"
								v-model="email"
								required
							)

						.block.col.gap
							.row.between
								label(for="password") Password
								label
									a.text-600.text-sm(href="#") Forgot password?
							input#password.input(
								type="password"
								placeholder="Enter your password"
								v-model="password"
								required
							)

						button.btn.btn-primary.full-x(type="submit") Sign In

						.row.center.t-gap-2
							p.text-sm.text-600 Don't have an account?
							router-link.text-sm.text-accent.ml-2(to="/demo/signup")  Sign up

	//- template(#footer)
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Page from '@/components/Page.vue'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
	// Handle login logic here
	console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>