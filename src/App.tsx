
import { RouterProvider } from 'react-router-dom'
import router from './Router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'
import ContextAuthProvider from './context/ContextAuth'

const App = () => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <ContextAuthProvider>
                <RouterProvider router={router} />
                <Toaster />
            </ContextAuthProvider> 
        </QueryClientProvider>
    )
}
export default App
