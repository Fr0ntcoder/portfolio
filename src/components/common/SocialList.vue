<script setup lang="ts">
import { Github, Mail, Send } from 'lucide-vue-next'
import type { Component } from 'vue'

interface ISocialItem {
	id: number
	icon: Component
	link: string
	text: string
}
const data: ISocialItem[] = [
	{
		id: 1,
		icon: Github,
		link: 'https://github.com/Fr0ntcoder',
		text: 'GitHub'
	},
	{
		id: 2,
		icon: Send,
		link: 'https://t.me/fr0ntcoder',
		text: 'Телеграм'
	},
	{
		id: 3,
		icon: Mail,
		link: 'creativ4lk@vk.com',
		text: 'Email'
	}
]
</script>

<template>
	<ul class="flex gap-2">
		<li v-for="item in data" :key="item.id">
			<a
				:href="item.link"
				target="_blank"
				class="text-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-all duration-300 hover:text-white"
			>
				<component :is="item.icon"><slot /></component>
			</a>
		</li>
	</ul>
</template>

<style scoped></style>
