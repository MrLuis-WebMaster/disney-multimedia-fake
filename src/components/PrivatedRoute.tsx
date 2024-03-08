import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useSession } from '../context/ContextAuth'

const PrivateRoute = ({ children }: { children: ReactNode}) => {
    const { session } = useSession()
    if (!session) {
        return <Navigate to={'/login'} />
    }
    return children
}

export default PrivateRoute
