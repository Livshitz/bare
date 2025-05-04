import { ref, watch } from 'vue'
import { createApp } from 'vue'
import { Router } from 'vue-router'

// Expose dark mode toggler and state for devtools
declare global {
	interface Window {
		$app?: ReturnType<typeof createApp>
		$view?: any
		$state?: Record<string, any>
		__currentViewInstance?: any
	}
}

export class Helpers {
	private isDark = ref(localStorage.getItem('darkMode') === 'true' ||
		window.matchMedia('(prefers-color-scheme: dark)').matches)

	constructor(private app: ReturnType<typeof createApp>, private router: Router) {
		this.setupDarkMode();
		this.setupDevtools();
	}

	private setupDarkMode() {
		watch(this.isDark, (newValue) => {
			if (newValue) {
				document.documentElement.classList.add('b-dark')
			} else {
				document.documentElement.classList.remove('b-dark')
			}
		}, { immediate: true })
	}

	private setupDevtools() {
		window.$app = this.app

		function updateDevtoolsView() {
			const inst = window.__currentViewInstance
			window.$view = inst && inst.proxy ? inst.proxy : undefined
			window.$state = inst && inst.setupState ? inst.setupState : undefined
		}

		window.addEventListener('current-view-updated', updateDevtoolsView)
		this.router.afterEach(() => setTimeout(updateDevtoolsView, 0))

		// Global mixin to register current routed view instance
		this.app.mixin({
			mounted() {
				// Only register for routed views (those rendered by <router-view>)
				if (this.$route && this.$.vnode.type.name !== 'RouterView') {
					window.__currentViewInstance = this.$
					window.dispatchEvent(new CustomEvent('current-view-updated'))
				}
			},
			unmounted() {
				if (window.__currentViewInstance === this.$) {
					window.__currentViewInstance = undefined
					window.dispatchEvent(new CustomEvent('current-view-updated'))
				}
			}
		})
	}

	public toggleDarkMode() {
		this.isDark.value = !this.isDark.value
		localStorage.setItem('darkMode', this.isDark.value.toString())
	}

	public getIsDark() {
		return this.isDark
	}
} 