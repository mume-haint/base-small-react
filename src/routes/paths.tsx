import Dashboard from "../pages/Dashboard.tsx";
import Posts from "../pages/Posts.tsx";
import Login from "../pages/Login.tsx";
import ReduxProfile from "../pages/ReduxProfile.tsx";
import RHFPage from "../pages/RHFPage.tsx";

export interface RouteType {
    path: string;
    element: JSX.Element;
}

export const userRouter: RouteType[] = [
    {
        path: '/dashboard',
        element: <Dashboard />,
    },
    {
        path: '/demo',
        element: <Posts />,
    },
    {
        path: '/profile',
        element: <ReduxProfile />,
    },
    {
        path: '/rhf-page',
        element: <RHFPage />,
    },
]

export const authRouter: RouteType[] = [
    {
        path: '/login',
        element: <Login />,
    },
]