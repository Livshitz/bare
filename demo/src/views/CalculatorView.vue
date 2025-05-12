<template lang="pug">
Page
	template(#main)
		.col.center.full
			div.layout-max-xs
				.block-no-bg.col.gap
					.prose
						h1.text-accent Calculator
						p.text-600 Simple calculator interface

					.block.col.gap
						// Calculator display
						input.input.full.text-2xl.t-text-righ.text-800.bg-300.t-border-dashed(
							type="text"
							:value="state.display"
							readonly
							aria-label="Calculator display"
							:disabled="state.loading"
						)
						span.text-xs.text-accent(v-if="state.loading") Calculating...

						// Calculator buttons
						.grid(style="grid-template-columns: repeat(4, 1fr); gap: 0.5rem;")
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '7' })") 7
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '8' })") 8
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '9' })") 9
							button.btn-ghost(:disabled="state.loading" @click="pushEvent({ type: 'operator', value: '/' })") ÷

							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '4' })") 4
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '5' })") 5
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '6' })") 6
							button.btn-ghost(:disabled="state.loading" @click="pushEvent({ type: 'operator', value: '*' })") ×

							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '1' })") 1
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '2' })") 2
							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '3' })") 3
							button.btn-ghost(:disabled="state.loading" @click="pushEvent({ type: 'operator', value: '-' })") −

							button.btn-secondary(:disabled="state.loading" @click="pushEvent({ type: 'digit', value: '0' })" style="grid-column: span 2;") 0
							button.btn-ghost(:disabled="state.loading" @click="pushEvent({ type: 'clear' })") C
							button.btn-ghost(:disabled="state.loading" @click="pushEvent({ type: 'operator', value: '+' })") +

							button.btn-primary.full.text-white(:disabled="state.loading" @click="pushEvent({ type: 'equals' })" style="grid-column: span 4;") =

					// Event stream debug view
					.block-no-bg.col.gap
						.prose
							.row
								div
									h2.text-accent.text-lg State
									div.text-xs.bg-100.rounded-md.p-2
										div {{ JSON.stringify(state, null, 2) }}
								div
									h2.text-accent.text-lg Event Stream
									ul.text-xs.bg-100.rounded-md.p-2
										li(v-for="(event, idx) in events" :key="idx")
											| {{ JSON.stringify(event) }}
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Page from '@/components/Page.vue';

// Event types
type CalcEvent =
	| { type: 'digit'; value: string }
	| { type: 'operator'; value: string }
	| { type: 'clear' }
	| { type: 'equals' }
	| { type: 'result'; value: string }
	| { type: 'error'; error: string };

// State
type CalcState = {
	display: string;
	operator: string;
	operand: number | null;
	justCalculated: boolean;
	loading: boolean;
};

const events = ref<CalcEvent[]>([]);
const state = reactive<CalcState>({
	display: '',
	operator: '',
	operand: null,
	justCalculated: false,
	loading: false,
});

function pushEvent(event: CalcEvent) {
	events.value.push(event);
	processEvent(event);
}

function processEvent(event: CalcEvent) {
	switch (event.type) {
		case 'digit':
			if (state.justCalculated) {
				state.display = '';
				state.justCalculated = false;
			}
			state.display += event.value;
			break;
		case 'clear':
			state.display = '';
			state.operator = '';
			state.operand = null;
			state.justCalculated = false;
			state.loading = false;
			break;
		case 'operator':
			if (state.display === '') return;
			if (state.operator) processEvent({ type: 'equals' });
			state.operand = parseFloat(state.display);
			state.operator = event.value;
			state.display = '';
			break;
		case 'equals':
			if (!state.operator || state.operand === null || state.display === '' || state.loading) return;
			state.loading = true;
			// Simulate async operation
			setTimeout(() => {
				const a = state.operand!;
				const b = parseFloat(state.display);
				let result = 0;
				switch (state.operator) {
					case '+': result = a + b; break;
					case '-': result = a - b; break;
					case '*': result = a * b; break;
					case '/': result = b !== 0 ? a / b : NaN; break;
				}
				if (isNaN(result)) {
					pushEvent({ type: 'error', error: 'Error' });
				} else {
					pushEvent({ type: 'result', value: result.toString() });
				}
			}, 1000); // 1 second delay
			break;
		case 'result':
			state.display = event.value;
			state.operator = '';
			state.operand = null;
			state.justCalculated = true;
			state.loading = false;
			break;
		case 'error':
			state.display = event.error;
			state.operator = '';
			state.operand = null;
			state.justCalculated = true;
			state.loading = false;
			break;
	}
}
</script>