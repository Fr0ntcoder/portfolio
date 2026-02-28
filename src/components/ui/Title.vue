<script setup lang="ts">
import { computed } from 'vue'

type TypeTitle = 1 | 2 | 3 | 4 | 5 | 6

interface Props {
	variant: TypeTitle
}

const props = withDefaults(defineProps<Props>(), {
	variant: 1
})

const tagName = computed(() => {
	switch (props.variant) {
		case 1:
			return 'h1'
		case 2:
			return 'h2'
		case 3:
			return 'h3'
		case 4:
			return 'h4'
		case 5:
			return 'h5'
		case 6:
			return 'h6'
	}
})

const styles = computed(() => {
	switch (props.variant) {
		case 1:
			return 'text-2xl sm:text-3xl md:text-4xl'
		case 2:
			return 'text-xl sm:text-2xl md:text-3xl'
		case 3:
			return 'text-lg sm:text-xl md:text-2xl'
		case 4:
			return 'text-md sm:text-lg md:text-xl'
		default:
			return 'text-base font-medium'
	}
})
</script>

<template>
	<component :is="tagName" :class="styles"><slot /></component>
</template>

<style scoped></style>
