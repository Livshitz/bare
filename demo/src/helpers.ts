import { ref, watch } from 'vue'

export function useDarkMode() {
	const isDark = ref(localStorage.getItem('darkMode') === 'true' ||
		window.matchMedia('(prefers-color-scheme: dark)').matches)

	const toggleDarkMode = () => {
		isDark.value = !isDark.value
		localStorage.setItem('darkMode', isDark.value.toString())
	}

	watch(isDark, (newValue) => {
		if (newValue) {
			document.documentElement.classList.add('b-dark')
		} else {
			document.documentElement.classList.remove('b-dark')
		}
	}, { immediate: true })

	return {
		isDark,
		toggleDarkMode
	}
} 