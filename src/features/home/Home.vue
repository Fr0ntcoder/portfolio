<script setup>
import Container from '../../components/ui/Container.vue'
import About from './About.vue'
import Banner from './Banner.vue'
import Projects from './Projects.vue'
import Skills from './Skills.vue'
</script>

<template>
	<Banner />
	<Container>
		<About id="about" />
		<Skills id="skills" />
		<Projects id="projects" />
	</Container>
</template>

<style scoped></style>
