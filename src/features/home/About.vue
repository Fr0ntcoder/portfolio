<script setup></script>

<template>
	<div class="h-screen py-20">
		<div class="grid grid-cols-3 gap-5">
			<div
				class="col-span-2 flex flex-col gap-5 text-xl"
				data-aos="fade-right"
				data-aos-anchor-placement="center-center"
			>
				<h2>Обо мне</h2>
				<p>
					Привет! Я фронтенд‑разработчик, создающий современные и удобные
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
			<div class="col-span-1 overflow-hidden rounded">
				<img
					src="/public/profile-img.jpg"
					alt="Фото"
					class="w-full"
					data-aos="fade-left"
					data-aos-anchor-placement="center-center"
				/>
			</div>
		</div>
	</div>
</template>

<style scoped></style>
