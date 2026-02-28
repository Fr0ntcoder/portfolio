import { API_ROUTES } from '../router/api-routes'
import { api } from './api'

export const projectService = {
	async getAll(): Promise<IProjectResponse[]> {
		const { data } = await api.get<IProjectResponse[]>(API_ROUTES.PROJECTS)
		return data
	}
}
