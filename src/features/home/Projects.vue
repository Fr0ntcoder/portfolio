<script setup>
import { useProjects } from '../../composables/useProjects'
const { projects } = useProjects()
</script>

<template>
	<div class="h-screen">
		<h3>Мои проекты</h3>
		<ul class="grid grid-cols-4 gap-5">
			<li v-for="item in projects" class="h-20 overflow-hidden">
				<img :src="item.image" :alt="item.title" />
			</li>
		</ul>
	</div>
</template>

<style scoped></style>
