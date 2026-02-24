<script setup lang="ts">
import { PAGE_ROUTES } from '../../router/page-routes'

interface ILinksProps {
	id: number
	name: string
	link: string
}
const links: ILinksProps[] = [
	{
		id: 1,
		name: 'Обо мне',
		link: PAGE_ROUTES.ABOUT
	},
	{
		id: 2,
		name: 'Мои навыки',
		link: PAGE_ROUTES.SKILL
	},
	{
		id: 3,
		name: 'Проекты',
		link: PAGE_ROUTES.CASE
	}
]
</script>

<template>
	<ul class="flex gap-5">
		<li v-for="item in links" :key="item.id">
			<a
				href="#"
				v-scroll-to="`#${item.link}`"
				class="transition-all duration-100 hover:border-b"
				>{{ item.name }}</a
			>
		</li>
	</ul>
</template>

<style scoped></style>
