<script setup lang="ts">
import Title from '../../components/ui/Title.vue'
import { useProjects } from '../../composables/useProjects'

const { projects } = useProjects()
</script>

<template>
	<div data-aos="zoom-in" data-aos-anchor-placement="top-center">
		<Title :variant="2" class="mb-5">Мои проекты</Title>
		<ul class="grid grid-cols-2 gap-5 md:grid-cols-3">
			<li
				v-for="item in projects"
				class="group relative h-30 cursor-pointer overflow-hidden sm:h-50"
			>
				<img
					:src="item.image"
					:alt="item.title"
					class="absolute top-0 left-0 h-full w-full bg-top-left object-cover transition-transform duration-300 group-hover:scale-125"
				/>
				<div
					class="bg-primary/80 relative top-0 left-0 flex h-full w-full items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
				>
					<a
						:href="item.link"
						target="_blank"
						class="border-b-2 transition-all duration-300 hover:border-transparent"
						>Перейти на сайт</a
					>
				</div>
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
