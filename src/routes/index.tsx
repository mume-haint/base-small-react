import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import DashboardLayout from "../layouts";
import {authRouter, userRouter} from "./paths.tsx";





const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<DashboardLayout />}>
                {
                    authRouter.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))
                }
                {
                    userRouter.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={route.element}
                        />
                    ))
                }
            </Route>
        </>
    )
);
export default router