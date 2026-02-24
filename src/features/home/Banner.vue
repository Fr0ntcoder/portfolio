<script setup lang="ts">
import { ref } from 'vue'
import TypeWrite from '../../components/common/TypeWrite.vue'
const showSecond = ref<boolean>(false)
</script>

<template>
	<div
		class="object-сover relative -mt-20 h-screen w-full bg-center bg-no-repeat"
		:style="{ backgroundImage: 'url(\'bg-img.jpg\')' }"
	>
		<div
			class="bg-primary/80 absolute flex h-full w-full flex-col items-center justify-center"
		>
			<TypeWrite
				text="Меня зовут Илья."
				@finished="showSecond = true"
				:is-active-cursor="!showSecond"
			/>
			<TypeWrite
				v-if="showSecond"
				text="И я Frontend-разработчик"
				:is-active-cursor="showSecond"
			/>
		</div>
	</div>
</template>

<style scoped></style>
