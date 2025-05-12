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
							:value="display"
							readonly
							aria-label="Calculator display"
						)

						// Calculator buttons
						.grid(style="grid-template-columns: repeat(4, 1fr); gap: 0.5rem;")
							button.btn-secondary(@click="append('7')") 7
							button.btn-secondary(@click="append('8')") 8
							button.btn-secondary(@click="append('9')") 9
							button.btn-ghost(@click="operate('/')") ÷

							button.btn-secondary(@click="append('4')") 4
							button.btn-secondary(@click="append('5')") 5
							button.btn-secondary(@click="append('6')") 6
							button.btn-ghost(@click="operate('*')") ×

							button.btn-secondary(@click="append('1')") 1
							button.btn-secondary(@click="append('2')") 2
							button.btn-secondary(@click="append('3')") 3
							button.btn-ghost(@click="operate('-')") −

							button.btn-secondary(@click="append('0')" style="grid-column: span 2;") 0
							button.btn-ghost(@click="clearDisplay") C
							button.btn-ghost(@click="operate('+')") +

							button.btn-primary.full.text-white(@click="calculate" style="grid-column: span 4;") =
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Page from '@/components/Page.vue';

const display = ref('');
const current = ref('');
const operator = ref('');
const operand = ref<number | null>(null);
const justCalculated = ref(false);

function append(val: string) {
	if (justCalculated.value) {
		display.value = '';
		justCalculated.value = false;
	}
	display.value += val;
}

function clearDisplay() {
	display.value = '';
	current.value = '';
	operator.value = '';
	operand.value = null;
	justCalculated.value = false;
}

function operate(op: string) {
	if (display.value === '') return;
	if (operator.value) calculate();
	operand.value = parseFloat(display.value);
	operator.value = op;
	display.value = '';
}

function calculate() {
	if (!operator.value || operand.value === null || display.value === '') return;
	const a = operand.value;
	const b = parseFloat(display.value);
	let result = 0;
	switch (operator.value) {
		case '+': result = a + b; break;
		case '-': result = a - b; break;
		case '*': result = a * b; break;
		case '/': result = b !== 0 ? a / b : NaN; break;
	}
	display.value = isNaN(result) ? 'Error' : result.toString();
	operator.value = '';
	operand.value = null;
	justCalculated.value = true;
}
</script>