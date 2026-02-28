<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'
import { Menu } from 'lucide-vue-next'
import { ref } from 'vue'
import { dataNavigation } from '../../shared/navigation.data'

const isOpen = ref<boolean>(false)
const menuRef = ref<HTMLElement | null>(null)

const toggleMenu = () => {
	isOpen.value = !isOpen.value
}

const handleOutsideClick = () => {
	isOpen.value = false
}

onClickOutside(menuRef, () => {
	isOpen.value = false
})
</script>

<template>
	<div class="relative" ref="menuRef">
		<button @click="toggleMenu" aria-label="Открыть меню">
			<Menu :size="35" />
		</button>
		<transition name="fade">
			<nav v-if="isOpen" class="absolute top-full right-0 w-37.5 bg-white p-2">
				<ul class="flex flex-col gap-5">
					<li
						v-for="item in dataNavigation"
						:key="item.id"
						@click="handleOutsideClick"
					>
						<a
							href="#"
							v-scroll-to="`#${item.link}`"
							class="text-primary transition-all duration-100 hover:border-b"
							>{{ item.name }}</a
						>
					</li>
				</ul>
			</nav>
		</transition>
	</div>
</template>

<style scoped></style>
