import { Navigate, Outlet } from "react-router";
import useAuth from "../../hooks/auth/useAuth";
import routeLinks from "./links";

const PublicRoute = () => {
    const { isAuth } = useAuth();

    return isAuth ? <Navigate to={routeLinks.home} replace /> : <Outlet />;
};

export default PublicRoute;