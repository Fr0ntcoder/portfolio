<script setup>
import Container from '../components/ui/Container.vue'
import About from '../features/home/About.vue'
import Banner from '../features/home/Banner.vue'
</script>

<template>
	<Banner />
	<Container>
		<About id="about" />
		<div id="skill" class="h-screen">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, quod non
			corrupti accusantium sunt beatae doloribus soluta consequuntur iure
			explicabo perspiciatis reprehenderit odio autem eligendi tempora vitae.
			Officiis, perspiciatis! Delectus. Quidem tenetur nostrum eum distinctio
			non
		</div>
		<div id="case" class="h-screen">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque totam
			nisi, molestiae, molestias animi facilis minus, nihil optio iure
			distinctio quia. Dicta nostrum doloremque assumenda repellendus? Ab
			accusamus quod distinctio! Culpa amet, inventore, eos eveniet suscipit
			libero, aperiam quia fugiat dolore ab ratione! Velit consequatur, quod
			libero minus exercitationem porro quas quidem esse sunt aliquam eum,
			veritatis quasi quaerat dolore?
		</div>
	</Container>
</template>

<style scoped></style>
