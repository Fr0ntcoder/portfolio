<script setup lang="ts">
import Title from '../../components/ui/Title.vue'

import { ISkillsData } from '../../types'

interface ISkillBlockProps {
	title: string
	data: ISkillsData[]
}
const { title, data } = defineProps<ISkillBlockProps>()
</script>

<template>
	<div>
		<Title :variant="3" class="mb-5">{{ title }}</Title>
		<ul class="grid grid-cols-2 gap-2 md:grid-cols-3">
			<li
				v-for="item in data"
				:key="item.title"
				class="group relative cursor-pointer overflow-hidden rounded bg-white/10 p-2"
			>
				<Title :variant="4" class="mb-5">{{ item.title }}</Title>
				<img :src="item.image" class="w-20" />
				<div
					class="bg-primary absolute bottom-0 left-0 h-full w-full translate-y-full p-3 text-sm transition-all duration-300 group-hover:translate-y-0"
				>
					{{ item.text }}
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
