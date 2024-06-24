import {ElementType, lazy, ReactNode, Suspense} from "react";
import LoadingScreen from "src/components/LoadingScreen.tsx";
import AuthGuard from "src/guards/AuthGuard.tsx";
import {Navigate} from "react-router-dom";

export interface RouteConfig {
  path: string,
  element: ReactNode,
  title?: string,
  children?: RouteConfig[]
}

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


export const authRoutes: RouteConfig[] = [
  {
    path: "/",
    element: <AuthGuard />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        title: "Dashboard"
      },
      {
        path: "local-posts",
        element: <LocalContextPosts />,
        title: "Local Context Posts"
      },
      {
        path: "api-posts",
        element: <ApiContextPosts />,
        title: "Api Context Posts"
      },
      {
        path: "component",
        element: <MUIComponent />,
        title: "MUI Component"
      },
      {
        path: "redux-profile",
        element: <ReduxProfile />,
        title: "Redux Profile"
      },
      {
        path: "rhf-page",
        element: <RHFPage />,
        title: "RHF Page"
      },
      {
        path: "error-pages",
        element: <ErrorPages />,
        title: "Error Pages"
      }
    ]
  }
];

export const guestRoutes: RouteConfig[] = [
  {
    path: "login",
    element: <Login />,
    title: "Login"
  },
  {
    path: "404",
    element: <Page404 />,
    title: "404"
  },
  {
    path: "403",
    element: <Page403 />,
    title: "403"
  },
  {
    path: "401",
    element: <Page401 />,
    title: "401"
  },
  {
    path: "*",
    element: <Navigate to="/404" replace />
  }
];

