<script setup lang="ts">
import SocialList from '../../components/common/SocialList.vue'
import Title from '../../components/ui/Title.vue'
</script>

<template>
	<div class="pt-10 sm:grid sm:grid-cols-3 sm:gap-5">
		<div
			class="col-span-2 mb-8 sm:mb-0"
			data-aos="fade-right"
			data-aos-anchor-placement="top-center"
		>
			<Title :variant="2" class="mb-5">Обо мне</Title>
			<div class="mb-8 flex flex-col gap-4 md:text-xl">
				<p>
					Привет! Я fullstack‑разработчик, создающий современные и удобные
					веб‑приложения. Мне нравится превращать дизайн в живой интерфейс,
					который выглядит гармонично на любом устройстве и работает стабильно в
					разных браузерах
				</p>
				<p>
					В работе я использую HTML5, CSS3 (SCSS/SASS), JavaScript (ES6+) и
					TypeScript. Развиваюсь в экосистемах Vue 3/Nuxt (Vuex, Pinia, Vuetify,
					ShadcnUI) и React/Next.js (RSC, Server Actions, Redux Toolkit, RTK
					Query, Zustand, TanStack Query).
				</p>
				<p>
					На бэкенде работаю с Node.js и Nest.js, PostgreSQL (через Prisma ORM),
					Redis, REST и GraphQL API.
				</p>
				<p>
					В повседневной работе применяю инструменты, помогающие поддерживать
					качество и стабильность продукта: GitHub Actions (CI/CD), Docker,
					Vite, Webpack, Git, Linux, Postman и Trello.
				</p>
				<p>
					Я коммуникабельный, целеустремлённый и быстро осваиваю новые
					технологии. Люблю решать сложные задачи и видеть, как мои проекты
					приносят людям пользу.
				</p>
			</div>
			<SocialList />
		</div>
		<div class="overflow-hidden rounded sm:col-span-1">
			<img
				src="/profile-img.jpg"
				alt="Фото"
				class="w-full"
				data-aos="fade-left"
				data-aos-anchor-placement="center-center"
			/>
		</div>
	</div>
</template>

<style scoped></style>
