<script setup lang="ts">
import { ArrowUp } from 'lucide-vue-next'
import { onBeforeMount, onMounted, ref } from 'vue'

const isVisible = ref<boolean>(false)

const handleScroll = () => {
	isVisible.value = window.scrollY > 200
}

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	})
}

onMounted(() => {
	window.addEventListener('scroll', handleScroll)
})

onBeforeMount(() => {
	window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
	<button
		:class="isVisible ? 'opacity-100' : 'opacity-0'"
		class="text-primary fixed right-5 bottom-5 flex h-10 w-10 items-center justify-center rounded-full bg-white transition-all"
		@click="scrollToTop"
	>
		<ArrowUp />
	</button>
</template>

<style scoped></style>
