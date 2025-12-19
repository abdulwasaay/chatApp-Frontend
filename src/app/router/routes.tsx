import type { ReactNode } from "react";
import DashboardMain from "../../features/Dashboard/pages"
import routeLinks from "./links"
import LoginMain from "../../features/auth/pages/Login";

interface AppRoute {
    id: number;
    path: string;
    element: ReactNode;
}

export const userRoutes: AppRoute[] = [
    {
        id: 1,
        path: routeLinks.home,
        element: <DashboardMain />,
    }
]

export const authRoutes: AppRoute[] = [
    {
        id: 1,
        path: routeLinks.login,
        element: <LoginMain />,
    }
]