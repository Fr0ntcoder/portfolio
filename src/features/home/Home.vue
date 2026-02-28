<script setup>
import Container from '../../components/ui/Container.vue'
import About from './About.vue'
import Banner from './Banner.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
</script>

<template>
	<Banner />
	<Container class="flex flex-col gap-10 pb-20 sm:pb-10 md:gap-10">
		<About id="about" />
		<Skills id="skills" />
		<Projects id="projects" />
	</Container>
</template>

<style scoped></style>
