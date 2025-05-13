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
import { reactive, ref, onMounted } from 'vue';
import Page from '@/components/Page.vue';
import { createCalculatorCodeletOrchestrator, type CalcState, type CalcEvent } from './codelets/CalculatorModule';
import { EVENT_ID, TRIGGER_EVENT_ID, type WithEventMetadata } from '../../../src/modules/Orchestrator';

const events = ref<any[]>([]);

const state = reactive<CalcState>({
	display: '',
	operator: '',
	operand: null,
	justCalculated: false,
	loading: false,
});

const orchestrator = createCalculatorCodeletOrchestrator(state as CalcState);

function extractEventMetadata(event: any) {
	return {
		...event,
		__eventId: (event as WithEventMetadata<any>)[EVENT_ID],
		__triggerEventId: (event as WithEventMetadata<any>)[TRIGGER_EVENT_ID],
	};
}

onMounted(() => {
	orchestrator.onStateChange(() => {
		Object.assign(state, orchestrator.getState());
	});

	// Listen to all processed events (including generated/internal events)
	orchestrator.onEventProcessed((event, result) => {
		events.value.push({
			...extractEventMetadata(event),
			result,
		});
	});
});

async function pushEvent(event: CalcEvent) {
	state.loading = true;
	try {
		await orchestrator.dispatchWithPromise(event);
	} catch (error) {
		console.error('Error processing calculator event:', error);
	} finally {
		state.loading = false;
	}
}
</script>