import { createApp } from 'vue'

declare global {
	interface Window {
		$app?: ReturnType<typeof createApp>
		$view?: any
		$state?: Record<string, any>
		__currentViewInstance?: any
	}
}
