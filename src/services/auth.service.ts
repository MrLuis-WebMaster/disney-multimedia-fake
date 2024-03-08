import { User, UserCredentials } from '../types/auth.types'
import { axiosHttp } from '../config/axios.config'


const login = async (data: UserCredentials) => {
    try {
        const user = (await axiosHttp.get<User[]>(`/users?email=${data.email}`,)).data[0]
        const promise = new Promise((resolve) => {
            setTimeout(() => {
                resolve(true)
            }, 5000)
        })
        await promise
        if(!user) throw new Error('User not found')
        if(user.password !== data.password) throw new Error('Invalid credentials')
        return user
    } catch (error) {
        if ( error instanceof Error) 
            throw new Error(error.message || 'Server Error')
    }
}

export {
    login
}
