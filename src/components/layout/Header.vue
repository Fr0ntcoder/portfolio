<script setup lang="ts">
import { Mail } from 'lucide-vue-next'
import Logo from '../common/Logo.vue'
import MobileMenu from '../common/MobileMenu.vue'
import Navigation from '../common/Navigation.vue'
import Container from '../ui/Container.vue'
</script>

<template>
	<header
		class="text-primary-foreground bg-primary/80 sticky top-0 z-20 flex h-20 w-full items-center justify-between text-xl"
	>
		<Container class="flex items-center justify-between">
			<Logo />
			<Navigation class="hidden sm:flex" />
			<MobileMenu class="sm:hidden" />
			<a
				href="mailto:creativ4lk@vk.com"
				class="hidden items-center gap-2 sm:flex"
				><Mail />creativ4lk@vk.com</a
			>
		</Container>
	</header>
</template>

<style scoped></style>
