<script setup lang="ts">
import { dataNavigation } from '../../shared/navigation.data'
</script>

<template>
	<ul class="gap-5">
		<li v-for="item in dataNavigation" :key="item.id">
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
