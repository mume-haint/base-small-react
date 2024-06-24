import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import {ReactNode} from "react";
import {HelmetWrapper} from "src/components/helmet";
import {authRoutes, guestRoutes, RouteConfig} from "src/routes/paths.tsx";


const generateRoutes = (routes: RouteConfig[]): ReactNode => {
  return routes.map((route, index) => {
    return (
      <Route
        key={index}
        path={route.path}
        element={
          route.title ? <HelmetWrapper title={route.title}>{route.element}</HelmetWrapper> : route.element
        }
      >
        {route.children && generateRoutes(route.children)}
      </Route>
    )
  });
};


const routes = createRoutesFromElements(
  <>
    {generateRoutes(authRoutes)}
    {generateRoutes(guestRoutes)}
  </>
);

export const router = createBrowserRouter(routes);
