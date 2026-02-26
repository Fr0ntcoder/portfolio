<script setup lang="ts">
import { ISkillsData } from '../../types'

interface ISkillBlockProps {
	title: string
	data: ISkillsData[]
}
const { title, data } = defineProps<ISkillBlockProps>()
</script>

<template>
	<div class="flex flex-col gap-5">
		<h3>{{ title }}</h3>
		<ul class="grid grid-cols-3 gap-2">
			<li
				v-for="item in data"
				:key="item.title"
				class="group relative cursor-pointer overflow-hidden rounded bg-white/10 p-5"
			>
				<h4 class="mb-5 text-xl">{{ item.title }}</h4>
				<img :src="item.image" />
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
