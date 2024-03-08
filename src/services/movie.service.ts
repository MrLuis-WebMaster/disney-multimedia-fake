import { axiosHttp } from '../config/axios.config'
import { Category, CategoryEmbedWithMovies, MovieDetails } from '../types/movie.types'


const getCategories = async () => {
    try {
        const data = (await axiosHttp.get<Category[]>(`/category`,)).data
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 5000)
        })
        await promise
        return data
    } catch (error) {
        if (error instanceof Error)
            throw new Error(error.message || 'Server Error')
    }
}

const getMoviesByCategory = async (id:string) => {
    try {
        const data = (await axiosHttp.get<CategoryEmbedWithMovies[]>(`/category?id=${id}&_embed=movies`,)).data[0] as CategoryEmbedWithMovies
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 2000)
        })
        await promise
        return data
    } catch (error) {
        if (error instanceof Error)
            throw new Error(error.message || 'Server Error')
    }
}

const getDetailsByMovie = async (id:string) => {
    try {
        const data = (await axiosHttp.get<MovieDetails[]>(`/details_movies?movieId=${id}`,)).data[0]
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 2000)
        })
        await promise
        return data
    } catch (error) {
        if (error instanceof Error)
            throw new Error(error.message || 'Server Error')
    }
}

export {
    getCategories,
    getMoviesByCategory,
    getDetailsByMovie
}
