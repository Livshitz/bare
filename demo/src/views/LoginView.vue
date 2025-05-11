<template lang="pug">
PageWithSidebar(:fixedHeader="false" :collapsible="false")
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
						h1.accent-text Welcome Back
						p.text-600 Please sign in to continue

					form.col.gap(@submit.prevent="handleSubmit")
						.block.col.gap
							label.label(for="email") Email
							input#email.input(
								type="email"
								placeholder="Enter your email"
								v-model="email"
								required
							)

						.block.col.gap
							.row.between
								label.label(for="password") Password
								a.text-600.text-sm(href="#") Forgot password?
							input#password.input(
								type="password"
								placeholder="Enter your password"
								v-model="password"
								required
							)

						button.btn.btn-primary.full-x(type="submit") Sign In

						.block-no-bg.text-center
							p.text-600
								| Don't have an account?
								a.accent-text(href="#")  Sign up

			div
				p.text-xs.center Make sure you agree to our Terms and Privacy Policy
	//- template(#footer)
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { PageWithSidebar } from '@bod.ee/bare/components';

const email = ref('')
const password = ref('')

const handleSubmit = () => {
	// Handle login logic here
	console.log('Login attempt:', { email: email.value, password: password.value })
}
</script>