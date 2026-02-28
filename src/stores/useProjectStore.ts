import { defineStore } from 'pinia'
import { ref } from 'vue'
import { projectService } from '../services/project.service'

export const useProjectStore = defineStore('projects', () => {
	const projects = ref<IProjectResponse[]>([])
	const loading = ref<boolean>(true)
	const error = ref<string>()
	const fetchProjects = async () => {
		try {
			const data = await projectService.getAll()
			projects.value = data
		} catch (er) {
			error.value = 'Ошибка при загрузке'
			loading.value = true
		} finally {
			loading.value = false
		}
	}

	return { projects, loading, error, fetchProjects }
})
