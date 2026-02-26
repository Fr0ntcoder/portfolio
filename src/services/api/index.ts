import axios, { AxiosInstance } from 'axios'

export const api: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	timeout: 5000,
	headers: {
		'Content-Type': 'applications/json'
	}
})
