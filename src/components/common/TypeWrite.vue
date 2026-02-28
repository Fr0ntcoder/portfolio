<script setup lang="ts">
import { onMounted, ref } from 'vue'

const props = defineProps<{ text: string; isActiveCursor: boolean }>()
const displayText = ref<string>('')
const fullText = ref<string>(props.text)
const speed = 90
const emit = defineEmits(['finished'])

const typeEffect = () => {
	if (displayText.value.length < fullText.value.length) {
		displayText.value += fullText.value.charAt(displayText.value.length)
		setTimeout(typeEffect, speed)
	} else {
		emit('finished')
	}
}

onMounted(() => {
	typeEffect()
})
</script>

<template>
	<div
		class="overflow-hidden text-2xl whitespace-nowrap sm:text-4xl md:text-5xl"
	>
		{{ displayText }}
		<span v-if="isActiveCursor" class="cursor">|</span>
	</div>
</template>

<style scoped>
.cursor {
	display: inline-block;
	width: 1ch;
	animation: blink 1s step-end infinite;
	color: blue;
}

@keyframes blink {
	50% {
		opacity: 0;
	}
}
</style>
