<script setup>
import Footer from '../components/layout/Footer.vue'
import Header from '../components/layout/Header.vue'
</script>

<template>
	<div class="relative flex flex-col">
		<Header />
		<main class="">
			<RouterView />
		</main>
		<Footer />
	</div>
</template>

<style scoped></style>
