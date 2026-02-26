import { api } from './api'

export const projectService = {
	async getAll(): Promise<IProjectResponse[]> {
		const { data } = await api.get<IProjectResponse[]>('/projects')

		return data
	}
}
