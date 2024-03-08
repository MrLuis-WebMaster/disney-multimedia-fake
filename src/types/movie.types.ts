export interface Category {
    id: string
    name: string
    poster: string
}

export interface Actor {
    id: string,
    name: string
    avatar?: string
}

export interface Movie {
    id: string
    title: string,
    description: string
    poster: string
    ranking: string
    categoryId: string
}

export interface CategoryEmbedWithMovies extends Category {
    movies: Movie[]
}

export interface MovieDetails {
    movieId: string
    title: string,
    sipnosis: string,
    actors: string
    youtubeId: string
    year: string,
    genre: string
    country: string
    ranking: string
    duration: string
    resume: string
}