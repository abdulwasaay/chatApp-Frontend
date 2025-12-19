import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/auth/useAuth"
import routeLinks from "./links";

const PrivateRoutes = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Outlet /> : <Navigate to={routeLinks.login} replace />;
}

export default PrivateRoutes