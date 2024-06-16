import {Navigate, Outlet, useRoutes} from "react-router-dom";
import DashboardLayout from "src/layouts/dashboard";
import {Suspense} from "react";
import Login from "src/pages/Login.tsx";
import Dashboard from "src/pages/Dashboard.tsx";
import ContextPosts from "src/pages/ContextPosts.tsx";
import ReduxProfile from "src/pages/ReduxProfile.tsx";
import RHFPage from "src/pages/RHFPage.tsx";
import MUIComponent from "src/pages/MUIComponent.tsx";


export default function Router() {
    return useRoutes([
        {
            element: (
                <DashboardLayout>
                    <Suspense>
                        <Outlet/>
                    </Suspense>
                </DashboardLayout>
            ),
            children: [
                {element: <Dashboard/>, index: true},
                {path: 'posts', element: <ContextPosts/>},
                {path: 'redux-profile', element: <ReduxProfile/>},
                {path: 'rhf-page', element: <RHFPage/>},
                {path: 'component', element: <MUIComponent/>},
            ],
        },
        {
            path: 'login',
            element: <Login/>,
        },
        {
            path: '*',
            element: <Navigate to="/login" replace/>,
        },
    ]);
}
