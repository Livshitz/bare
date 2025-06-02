<template lang="pug">
PageWithSidebar(:fixedHeader="true", :collapsible="true").narrow
	template(v-slot:header)
		.row.center-y.between
			h1.title UI Generator
			button.btn.btn-primary(@click="saveUI") Save

	template(v-slot:sidebar)
		nav.col.gap
			.block
				h2.label History
				ul.col.gap
					li(v-for="item in history", :key="item.id")
						button.btn.btn-ghost(@click="loadHistoryItem(item)") {{ item.timestamp }}
			.block
				h2.label Settings
				// Add settings here

	template(v-slot:main)
		.stack.gap-md.centered.layout--full-height-header.full-x.layout--full-height.layout--fullscreen
			// UI Preview
			.block.border.rounded
				div.full-x(v-html="uiPreview")

			// Chat Interface
			.stack.gap.chat-area.scroll-y(ref="chatArea")
				.chat-message(v-for="message in messages", :key="message.id", :class="[ message.isUser ? 'user' : 'llm' ]").row.gap.start-y.full-x
					// Avatar
					span.avatar
						i(:class="message.isUser ? 'fa-solid fa-user' : 'fa-solid fa-robot'")
					// Bubble
					div.bubble
						p.text-sm {{ message.text }}
						span.text-xs.text-muted(v-if="message.timestamp") {{ message.timestamp }}
					// Spacer for right alignment
					span.flex-1(v-if="message.isUser")
					// Spacer for left alignment
					span.flex-1(v-else)
				// Typing indicator
				div.row.gap.start-y.full-x(v-if="isLoading")
					span.avatar
						i.fa-solid.fa-robot
					div.bubble.llm-bubble
						span.text-sm.text-muted Typing...
					span.flex-1

	
	template(#footer)
		footer.col.gap.block-no-bg.end-y.full-x.center-x
			// File Upload
			input(type="file", ref="fileInput", style="display: none", @change="handleFileUpload")
			//- .text-muted.text-center(v-if="isLoading").row.center
				| Loading...
				.loader
			.row.gap.full-x
				.full-y.center
					.btn-lg.btn-primary(@click="triggerFileUpload")
						i.fa-solid.fa-file-arrow-up.icon-xl
				textarea.textarea.input-lg.flex(v-model="newMessage", placeholder="Type your message...")
				button.btn.btn-primary.btn-lg(@click="sendMessage") Send

</template>
	
<script setup lang="ts">
import { ref, type Ref, onMounted, nextTick } from 'vue';
import { PageWithSidebar } from '@bod.ee/bare/components';

interface Message {
	id: number;
	text: string;
	isUser: boolean;
	timestamp?: string;
}

interface HistoryItem {
	id: number;
	timestamp: string;
	ui: string;
	messages: Message[];
}

const messages: Ref<Message[]> = ref([]);
const newMessage: Ref<string> = ref('');
const isLoading: Ref<boolean> = ref(false);
const uiPreview: Ref<string> = ref('<p>Generated UI will appear here.</p>'); // Initial UI preview
const history: Ref<HistoryItem[]> = ref([]);
const fileInput = ref<HTMLInputElement | null>(null);
const chatArea = ref<HTMLElement | null>(null);

const sendMessage = (): void => {
	if (newMessage.value.trim() === '') return;

	const now = new Date();
	const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
	// Add user message to history
	messages.value.push({ id: Date.now(), text: newMessage.value, isUser: true, timestamp });
	newMessage.value = '';
	isLoading.value = true;
	nextTick(() => scrollToBottom());

	// Simulate LLM response and UI update
	setTimeout(() => {
		const llmResponse = "OK. I've made the UI more blue.";
		const llmTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
		messages.value.push({ id: Date.now(), text: llmResponse, isUser: false, timestamp: llmTimestamp });
		uiPreview.value = '<div style="background-color: lightblue; padding: 20px;"><b>Updated</b> UI</div>'; // Simulate UI update
		isLoading.value = false;
		nextTick(() => scrollToBottom());

		// Add to history
		history.value.push({
			id: Date.now(),
			timestamp: new Date().toLocaleString(),
			ui: uiPreview.value,
			messages: [...messages.value]
		});
	}, 2000);
};

const triggerFileUpload = (): void => {
    fileInput.value?.click();
};

const handleFileUpload = (event: Event): void => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
        // Handle file upload and UI generation logic here
        console.log("File uploaded:", file);
        // For example, you would send the file to a backend,
        // process it with an LLM, and update uiPreview.value
    }
};

const saveUI = (): void => {
	// Implement save functionality here
	alert("UI Saved!");
};

const loadHistoryItem = (item: HistoryItem): void => {
	uiPreview.value = item.ui;
	messages.value = [...item.messages];
};

function scrollToBottom() {
	if (chatArea.value) {
		chatArea.value.scrollTop = chatArea.value.scrollHeight;
	}
}

onMounted(() => {
	nextTick(() => scrollToBottom());
});
</script>

<style scoped lang="less">
@import (reference) '@/index.less';

.chat-area {
	.bg-100;
	border-radius: 1rem;
	padding: 1rem;
	min-height: 300px;
	overflow-y: auto;
}
.chat-message.user {
	flex-direction: row-reverse;
	.avatar {
		.bg-100;
		.text;
	}
	.bubble {
		.bg-200;
		.text;
		text-align: right;
	}
}
.chat-message.llm {
	flex-direction: row;
	.avatar {
		.bg-100;
		.text;
	}
	.bubble {
		.bg-200;
		.text;
		text-align: left;
	}
}
.bubble {
	box-shadow: 0 2px 8px rgba(0,0,0,0.04);
	margin-bottom: 0.25rem;
	padding: 0.75rem 1rem;
	border-radius: 1.25rem;
	max-width: 70%;
	min-width: 2rem;
	word-break: break-word;
}
.avatar {
	border-radius: 50%;
	width: 2.5rem;
	height: 2.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.25rem;
}
@media (max-width: 600px) {
	.chat-area {
		min-height: 180px;
		padding: 0.5rem;
	}
	.bubble {
		padding: 0.5rem 0.75rem;
		font-size: 0.95rem;
	}
	.avatar {
		width: 2rem;
		height: 2rem;
		font-size: 1rem;
	}
}
</style>

<style lang="less" scoped>
@import (reference) '@/index.less';

.layout-main {
	.layout--full-height;
}
</style>