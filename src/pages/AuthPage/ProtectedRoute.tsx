import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoute = () => {
    const user = localStorage.getItem('user')
    if (user) return <Outlet />
    if (!user) return <Navigate to="/auth/login" replace />;
}

export default ProtectedRoute