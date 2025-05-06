<template lang="pug">
.section.prose
	h1 Font Awesome Icons Demo
	p Easily preview and copy icon class names. Click an icon to copy its class name!
	.row.center
		input.input(type="text" v-model="filter" placeholder="Filter icons..." class="full t-max-w-md")
	.icon-group(v-for="group in filteredIconGroups" :key="group.style")
		h2 {{ group.label }}
		.icon-grid
			div.icon-item(v-for="icon in group.icons" :key="icon" @click="copy(pugClass(group.style, icon))")
				i(:class="group.style + ' ' + icon + ' icon'")
				span.icon-label {{ pugClass(group.style, icon) }}
	.t-text-center.t-py-8(v-if="loading")
		| Loading icons…
	transition(name="fade")
		.toast(v-if="copied") Copied!
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

const loading = ref(true)
const copied = ref(false)
const iconGroups = ref<{ style: string, label: string, icons: string[] }[]>([])
const filter = ref('')

// Labels for icon styles
const styleLabels: Record<string, string> = {
	'fa-solid': 'Solid',
	'fa-regular': 'Regular',
	'fa-brands': 'Brands',
}

// Known Font Awesome utility classes to exclude
const FA_UTILS = [
	'fa-fw', 'fa-spin', 'fa-pulse', 'fa-lg', 'fa-xs', 'fa-sm',
	'fa-1x', 'fa-2x', 'fa-3x', 'fa-4x', 'fa-5x', 'fa-6x', 'fa-7x', 'fa-8x', 'fa-9x', 'fa-10x',
	'fa-border', 'fa-inverse', 'fa-stack', 'fa-stack-1x', 'fa-stack-2x',
	'fa-primary', 'fa-secondary', 'fa-swap-opacity',
	'fa-flip', 'fa-rotate-90', 'fa-rotate-180', 'fa-rotate-270',
	'fa-pull-left', 'fa-pull-right', 'fa-li', 'fa-ul',
	'fa-layers', 'fa-layers-text', 'fa-layers-counter',
	'fa-sr-only', 'fa-sr-only-focusable',
	'fa-rotate-by', 'fa-beat', 'fa-fade', 'fa-beat-fade', 'fa-bounce', 'fa-shake', 'fa-flip',
	'fa-spin-pulse', 'fa-spin-reverse'
	// Add any other utility classes if needed
];

const FA_STYLE_PREFIXES = ['fa-solid', 'fa-regular', 'fa-brands'];

// Function to check if a class name is a potential icon name (not utility or style prefix)
function isPotentialIconName(cls: string): boolean {
	return /^fa-[a-z0-9-]+$/.test(cls) &&
		!FA_UTILS.includes(cls) &&
		!FA_STYLE_PREFIXES.includes(cls);
}

onMounted(() => {
	const tempFound: Record<string, Set<string>> = {
		'fa-solid': new Set(),
		'fa-regular': new Set(),
		'fa-brands': new Set(),
	};

	for (const sheet of Array.from(document.styleSheets)) {
		let rules: CSSRuleList | undefined;
		try { rules = sheet.cssRules; }
		catch (e) {
			console.warn(`Cannot access CSS rules from stylesheet: ${sheet.href}`, e); // Optional: for debugging CORS issues
			continue; // Skip inaccessible sheets (e.g., CORS restricted)
		}
		if (!rules) continue;

		for (const rule of Array.from(rules)) {
			// Ensure it's a CSSStyleRule (type 1)
			if (rule.type !== CSSRule.STYLE_RULE) continue;

			const styleRule = rule as CSSStyleRule;
			const selectorText = styleRule.selectorText;
			if (!selectorText) continue;


			// Process each part of a comma-separated selector (e.g., ".foo, .bar .fa-solid.fa-user")
			const individualSelectors = selectorText.split(',').map(s => s.trim());

			for (const currentSelector of individualSelectors) {
				// Only consider selectors that target a ::before or ::after pseudo-element
				if (!currentSelector.includes('::before') && !currentSelector.includes('::after')) {
					continue;
				}

				const classesInSelector = currentSelector.match(/\.fa-([a-z0-9-]+)/g);
				if (!classesInSelector) continue;

				let identifiedStylePrefix: string | null = null;
				const potentialIcons: string[] = [];

				for (const clsWithDot of classesInSelector) {
					const cls = clsWithDot.substring(1); // remove leading dot e.g. ".fa-user" -> "fa-user"
					if (FA_STYLE_PREFIXES.includes(cls)) {
						identifiedStylePrefix = cls;
					} else if (isPotentialIconName(cls)) {
						potentialIcons.push(cls);
					}
				}

				// If icon names were found in this selector part
				if (potentialIcons.length > 0) {
					// Case 1: An explicit style prefix was found alongside the icon(s)
					if (identifiedStylePrefix && tempFound[identifiedStylePrefix]) {
						for (const iconName of potentialIcons) {
							tempFound[identifiedStylePrefix].add(iconName);
						}
					}
					// Case 2: No explicit style prefix found with the icon(s) in this selector part.
					// Default these icons to the 'fa-solid' category.
					else if (!identifiedStylePrefix && tempFound['fa-solid']) {
						for (const iconName of potentialIcons) {
							// isPotentialIconName already ensures it's not a style prefix.
							tempFound['fa-solid'].add(iconName);
						}
					}
				}
			}
		}
	}

	iconGroups.value = Object.entries(tempFound).map(([style, iconsSet]) => ({
		style,
		label: styleLabels[style] || style.replace('fa-', '').replace(/^\w/, c => c.toUpperCase()), // Generates a nicer label like 'Solid'
		icons: Array.from(iconsSet).sort(),
	})).filter(g => g.icons.length > 0); // Only include groups that have icons


	loading.value = false;
});

const filteredIconGroups = computed(() => {
	if (!filter.value.trim()) return iconGroups.value
	const q = filter.value.trim().toLowerCase()
	return iconGroups.value
		.map(group => ({
			...group,
			icons: group.icons.filter(icon => (group.style + ' ' + icon).toLowerCase().includes(q))
		}))
		.filter(group => group.icons.length > 0)
})

function pugClass(style: string, icon: string) {
	return `i.${style}.${icon}`
}

function copy(className: string) {
	navigator.clipboard.writeText(className);
	copied.value = true;
	setTimeout(() => (copied.value = false), 1000);
}
</script>

<style lang="less" scoped>
.icon-group+.icon-group {
	margin-top: 2.5rem;
}

.icon-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
	gap: 1.5rem;
	margin-top: 2rem;
}

.icon-item {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 1rem;
	border-radius: 0.5rem;
	background: var(--color-neutral-100, #f3f4f6);
	cursor: pointer;
	transition: background 0.2s;

	&:hover {
		background: var(--color-zinc-100, #dbeafe);
	}
}

.icon-label {
	margin-top: 0.5rem;
	font-size: 0.85em;
	color: #555;
	word-break: break-all;
	text-align: center;
}

.icon {
	font-size: 2rem;
	color: var(--color-zinc-700, #222222);
}

.toast {
	position: fixed;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	background: #222;
	color: #fff;
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	font-size: 1rem;
	z-index: 1000;
	opacity: 0.95;
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
</style>