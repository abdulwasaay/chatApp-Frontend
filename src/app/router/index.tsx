import { Route, Routes } from "react-router"
import PrivateRoutes from "./privateRoutes"
import PublicRoute from "./publicRoutes"
import { authRoutes, userRoutes } from "./routes"

const HandleRoutes = () => {
    return (
        <Routes>
            {/* PUBLIC ROUTES */}
            <Route element={<PublicRoute />}>
                {authRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>

            {/* PRIVATE ROUTES */}
            <Route element={<PrivateRoutes />}>
                {userRoutes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Route>
        </Routes>
    )
}

export default HandleRoutes