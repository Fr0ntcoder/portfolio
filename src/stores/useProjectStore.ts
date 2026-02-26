import { defineStore } from 'pinia'
import { ref } from 'vue'
import { api } from '../services/api'

export const useProjectStore = defineStore('projects', () => {
	const projects = ref<IProjectResponse[]>([])
	const error = ref<string>()
	const fetchProjects = async () => {
		try {
			const { data } = await api.get('/projects')
			projects.value = data
		} catch (er) {
			error.value = 'Ошибка при загрузке'
		}
	}

	return { projects, error, fetchProjects }
})
