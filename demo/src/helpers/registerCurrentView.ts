import { getCurrentInstance, onMounted, onUnmounted } from 'vue';

export function registerCurrentView() {
  const instance = getCurrentInstance();
  if (!instance) return;

  onMounted(() => {
    window.__currentViewInstance = instance;
    window.dispatchEvent(new CustomEvent('current-view-updated'));
  });

  onUnmounted(() => {
    if (window.__currentViewInstance === instance) {
      window.__currentViewInstance = undefined;
      window.dispatchEvent(new CustomEvent('current-view-updated'));
    }
  });
}

declare global {
  interface Window {
    __currentViewInstance?: any;
  }
} 