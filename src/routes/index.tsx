import {createBrowserRouter, createRoutesFromElements, Navigate, Route} from "react-router-dom";
import {ElementType, lazy, Suspense} from "react";
import AuthGuard from "src/guards/AuthGuard";
import LoadingScreen from "src/components/LoadingScreen";
import {HelmetWrapper} from "src/components/helmet";

const Loadable = (Component: ElementType) => () => {
  return (
    <Suspense fallback={<LoadingScreen/>}>
      <Component/>
    </Suspense>
  );
};

const Login = Loadable(lazy(() => import("src/pages/Login")));
const Dashboard = Loadable(lazy(() => import("src/pages/Dashboard")));
const LocalContextPosts = Loadable(lazy(() => import("src/pages/LocalContextPosts")));
const ApiContextPosts = Loadable(lazy(() => import("src/pages/ApiContextPosts")));
const ReduxProfile = Loadable(lazy(() => import("src/pages/ReduxProfile")));
const RHFPage = Loadable(lazy(() => import("src/pages/RHFPage")));
const MUIComponent = Loadable(lazy(() => import("src/pages/MUIComponent")));
const ErrorPages = Loadable(lazy(() => import("src/pages/ErrorPages")));
const Page404 = Loadable(lazy(() => import("src/pages/Page404")));
const Page403 = Loadable(lazy(() => import("src/pages/Page403")));
const Page401 = Loadable(lazy(() => import("src/pages/Page401")));

const routes = createRoutesFromElements(
  <>
    <Route path="/" element={<AuthGuard/>}>
      <Route
        index
        element={<HelmetWrapper title="Dashboard"><Dashboard/></HelmetWrapper>}
      />
      <Route
        path="local-posts"
        element={<HelmetWrapper title="Local Context Posts"><LocalContextPosts/></HelmetWrapper>}
      />
      <Route
        path="api-posts"
        element={<HelmetWrapper title="Api Context Posts"><ApiContextPosts/></HelmetWrapper>}
      />
      <Route
        path="component"
        element={<HelmetWrapper title="MUI Component"><MUIComponent/></HelmetWrapper>}
      />
      <Route
        path="redux-profile"
        element={<HelmetWrapper title="Redux Profile"><ReduxProfile/></HelmetWrapper>}
      />
      <Route
        path="rhf-page"
        element={<HelmetWrapper title="RHF Page"><RHFPage/></HelmetWrapper>}
      />
      <Route
        path="error-pages"
        element={<HelmetWrapper title="Error Pages"><ErrorPages/></HelmetWrapper>}
      />
    </Route>
    <Route
      path="login"
      element={<HelmetWrapper title="Login"><Login/></HelmetWrapper>}
    />
    <Route
      path="404"
      element={<HelmetWrapper title="404"><Page404/></HelmetWrapper>}
    />
    <Route
      path="403"
      element={<HelmetWrapper title="403"><Page403/></HelmetWrapper>}
    />
    <Route
      path="401"
      element={<HelmetWrapper title="401"><Page401/></HelmetWrapper>}
    />
    <Route
      path="*"
      element={<Navigate to="/404" replace/>}
    />
  </>
);

export const router = createBrowserRouter(routes);
