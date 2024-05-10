import { Navigate, Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage"

const DashBoardModule: React.FC = () => {
    return (

        <Routes>
            <Route path="/" element={<Navigate to="/auth/login" />} />
            <Route path="/home" element={<Homepage />} />
        </Routes>
    )
}

export default DashBoardModule;