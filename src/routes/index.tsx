import {Navigate, Outlet, useRoutes} from "react-router-dom";
import DashboardLayout from "src/layouts/dashboard";
import {Suspense} from "react";
import Login from "src/pages/Login.tsx";
import Dashboard from "src/pages/Dashboard.tsx";
import Posts from "src/pages/Posts.tsx";
import ReduxProfile from "src/pages/ReduxProfile.tsx";
import RHFPage from "src/pages/RHFPage.tsx";
import ComponentList from "src/pages/ComponentList.tsx";


export default function Router() {
    const routes = useRoutes([
        {
            element: (
                <DashboardLayout>
                    <Suspense>
                        <Outlet />
                    </Suspense>
                </DashboardLayout>
            ),
            children: [
                { element: <Dashboard />, index: true },
                { path: 'posts', element: <Posts /> },
                { path: 'redux-profile', element: <ReduxProfile /> },
                { path: 'rhf-page', element: <RHFPage /> },
                { path: 'component', element: <ComponentList /> },
            ],
        },
        {
            path: 'login',
            element: <Login />,
        },
        {
            path: '*',
            element: <Navigate to="/login" replace />,
        },
    ]);

    return routes;
}
