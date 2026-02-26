import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useProjectStore } from '../stores/useProjectStore'

export const useProjects = () => {
	const store = useProjectStore()
	const { projects } = storeToRefs(store)

	onMounted(() => {
		store.fetchProjects()
	})

	return { projects }
}
