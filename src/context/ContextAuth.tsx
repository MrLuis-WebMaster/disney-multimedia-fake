import React, { createContext, ReactNode, useContext, useState } from 'react'
import { User } from '../types/auth.types'

const KEY_SESSION = "SESSION"
const sessionStorageUser = JSON.parse(sessionStorage.getItem(KEY_SESSION) as string) as User

export interface AuthContextProps {
    session: User | null
    saveSession: (user: User) => void
    logout: () => void
}

export const ContextAuth = createContext<AuthContextProps>({
    session: sessionStorageUser,
    saveSession: () => {},
    logout: () => {},
})

interface ContextAuthProps {
    children: ReactNode
}

export const ContextAuthProvider: React.FC<ContextAuthProps> = ({
    children,
}) => {

    const [session, setSession] = useState<User | null>(sessionStorageUser)

    const saveSession = (user: User) => {
        setSession(user)
        sessionStorage.setItem(KEY_SESSION, JSON.stringify(user))
    }
    const logout = () => {
        setSession(null),
        sessionStorage.removeItem(KEY_SESSION)
    }
    const authContextValue: AuthContextProps = {
        session,
        saveSession,
        logout
    }
    return (
        <ContextAuth.Provider value={authContextValue}>
            {children}
        </ContextAuth.Provider>
    )
}

export const useSession = () => {
    const { session, logout, saveSession } = useContext(ContextAuth)
    return { session, logout, saveSession }
}

export default ContextAuthProvider
