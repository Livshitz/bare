import { Router } from 'vue-router'
import { createApp } from 'vue'

export class DevtoolsHelper {
	constructor(private app: ReturnType<typeof createApp>, private router: Router) {
		this.setupDevtools();
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
} 