import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import {ElementType, lazy, Suspense} from "react";
import HelmetWrapper from "src/components/helmet/HelmetWrapper";
import AuthGuard from "src/guards/AuthGuard";
import LoadingScreen from "src/components/LoadingScreen";

const Loadable = (Component: ElementType) => () => {
    return (
        <Suspense fallback={<LoadingScreen />}>
            <Component />
        </Suspense>
    );
};

const Login = Loadable(lazy(() => import("src/pages/Login")));
const Dashboard = Loadable(lazy(() => import("src/pages/Dashboard")));
const ContextPosts = Loadable(lazy(() => import("src/pages/ContextPosts")));
const ReduxProfile = Loadable(lazy(() => import("src/pages/ReduxProfile")));
const RHFPage = Loadable(lazy(() => import("src/pages/RHFPage")));
const MUIComponent = Loadable(lazy(() => import("src/pages/MUIComponent")));

const routes = createRoutesFromElements(
    <>
        <Route path="/" element={<AuthGuard />}>
            <Route
                index
                element={<HelmetWrapper title="Dashboard"><Dashboard /></HelmetWrapper>}
            />
            <Route
                path="posts"
                element={<HelmetWrapper title="Context Posts"><ContextPosts /></HelmetWrapper>}
            />
            <Route
                path="component"
                element={<HelmetWrapper title="MUI Component"><MUIComponent /></HelmetWrapper>}
            />
            <Route
                path="redux-profile"
                element={<HelmetWrapper title="Redux Profile"><ReduxProfile /></HelmetWrapper>}
            />
            <Route
                path="rhf-page"
                element={<HelmetWrapper title="RHF Page"><RHFPage /></HelmetWrapper>}
            />
        </Route>
        <Route
            path="login"
            element={<HelmetWrapper title="Login"><Login /></HelmetWrapper>}
        />
        <Route
            path="*"
            element={<Navigate to="/login" replace />}
        />
    </>
);

export const router = createBrowserRouter(routes);
