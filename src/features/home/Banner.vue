<script setup lang="ts">
import { ref } from 'vue'
import TypeWrite from '../../components/common/TypeWrite.vue'
import { ArrowDown } from 'lucide-vue-next'

const showSecond = ref<boolean>(false)
</script>

<template>
	<div
		class="object-сover relative -mt-20 h-screen w-full overflow-hidden bg-center bg-no-repeat"
		:style="{ backgroundImage: 'url(\'bg-img.jpg\')' }"
	>
		<div
			class="bg-primary/80 absolute flex h-full w-full flex-col items-center justify-center"
		>
			<TypeWrite
				text="Привет! Меня зовут Илья"
				@finished="showSecond = true"
				:is-active-cursor="!showSecond"
			/>
			<TypeWrite
				v-if="showSecond"
				text="И я Fullstack-разработчик"
				:is-active-cursor="showSecond"
			/>
		</div>
		<div class="absolute bottom-10 left-0 flex w-full justify-center">
			<a
				v-scroll-to="`#about`"
				href="#about"
				class="animate-scroll-pulse text-primary flex h-10 w-10 items-center justify-center rounded-full bg-white"
			>
				<ArrowDown />
			</a>
		</div>
	</div>
</template>

<style scoped></style>
