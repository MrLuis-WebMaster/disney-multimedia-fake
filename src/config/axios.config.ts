import axios, { CreateAxiosDefaults } from "axios"

const config: CreateAxiosDefaults = {
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
    },
}

export const axiosHttp = axios.create({
    ...config,
})
