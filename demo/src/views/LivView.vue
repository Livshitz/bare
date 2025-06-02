<template lang="pug">
Page(:fixedHeader="false" :collapsible="false")
	//- template(#header)
		.block-no-bg.layout-max-sm.t-py-0.t-gap-0
			p.title Elya Livshitz
			p.text-muted Personal Projects, Libraries, Utilities, and Blog
	template(#main)
		.block-dark.full.center.layout--fullscreen.bg-950(v-if="content")
			.block-no-bg.layout-max-sm.center
				p.title Elya Livshitz
				p.text-muted Personal Projects, Libraries, Utilities, and Blog
		.block-no-bg.gap.full-x.layout-max-sm(v-if="content")
			.row.full-x.stack-md
				// Libraries Section
				section.col.gap
					h2.text-xl.font-bold Libraries
					.col.gap
						.block(
							v-for="lib in (showMore.libraries ? content.libraries.filter((l: any) => l.enabled !== false) : content.libraries.filter((l: any) => l.enabled !== false).slice(0, content.showCount_libraries))"
							:key="lib.title"
						)
							a.row.gap.center-y(:href="lib.url" target="_blank")
								.caption.text.font-semibold {{ lib.title }}
							p.text-600.text-sm {{ lib.desc }}
							span(v-if="lib.tags && lib.tags.length > 0")
								span.badge.badge-xs.bg-200.text-600(v-for="tag in lib.tags" :key="tag") {{ tag }}
						div(v-if="content.libraries.filter((l: any) => l.enabled !== false).length > content.showCount_libraries")
							button.text-accent(@click="showMore.libraries = !showMore.libraries") {{ showMore.libraries ? 'Show less' : 'View more' }}
				// Utilities Section
				section.col.gap
					h2.text-xl.font-bold Utilities
					.col.gap
						.block(
							v-for="util in (showMore.utilities ? content.utilities.filter((u: any) => u.enabled !== false) : content.utilities.filter((u: any) => u.enabled !== false).slice(0, content.showCount_utilities))"
							:key="util.title"
						)
							a.row.gap.center-y(:href="util.url" target="_blank")
								.caption.text.font-semibold {{ util.title }}
							p.text-600.text-sm {{ util.desc }}
							span(v-if="util.tags && util.tags.length > 0")
								span.badge.badge-xs.bg-200.text-600(v-for="tag in util.tags" :key="tag") {{ tag }}
						div(v-if="content.utilities.filter((u: any) => u.enabled !== false).length > content.showCount_utilities")
							button.text-accent(@click="showMore.utilities = !showMore.utilities") {{ showMore.utilities ? 'Show less' : 'View more' }}
				// Blog Section
				section.col.gap
					h2.text-xl.font-bold Blog
					.col.gap
						.block(
							v-for="blog in (showMore.blogs ? content.blogs.filter((b: any) => b.enabled !== false) : content.blogs.filter((b: any) => b.enabled !== false).slice(0, content.showCount_blogs))"
							:key="blog.title"
						)
							a.row.gap.center-y(:href="blog.url" target="_blank")
								.caption.text.font-semibold {{ blog.title }}
							span(v-if="blog.tags && blog.tags.length > 0")
								span.badge.badge-xs.bg-200.text-600(v-for="tag in blog.tags" :key="tag") {{ tag }}
							p.text-600.text-sm {{ blog.desc }}
							span.text-xs.text-muted(v-if="blog.date") {{ blog.date }}
						div(v-if="content.blogs.filter((b: any) => b.enabled !== false).length > content.showCount_blogs")
							button.text-accent(@click="showMore.blogs = !showMore.blogs") {{ showMore.blogs ? 'Show less' : 'View more' }}
</template>

<script setup lang="ts">
// @ts-ignore: Allow importing JSON modules
import { ref, onMounted } from 'vue';
import Page from '@/components/Page.vue';

const content = ref<any>(null);
const showMore = ref({ blogs: false, libraries: false, utilities: false });

onMounted(async () => {
	const data = await import('../assets/content.json');
	content.value = data.default || data;
	showMore.value.blogs = content.value.showMore_blogs;
	showMore.value.libraries = content.value.showMore_libraries;
	showMore.value.utilities = content.value.showMore_utilities;
});
</script> 