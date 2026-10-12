import { Fragment } from "react";
import { Link, useLocation } from "react-router";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";

export const CustomBreadcrumbs = () => {
  const { pathname } = useLocation();
  const routes = pathname.split("/").filter(Boolean); // Filters falsy values (ex: false, 0, null, undefined, "")
  // const routes = pathname.split("/").filter((route) => route !== ""); //* Not the same but meets the requirements
  const isHome = pathname === "/";
  console.log(pathname);
  console.log(routes);

  return (
    <Breadcrumb className="my-5">
      <BreadcrumbList>
        <BreadcrumbItem>
          {isHome ? (
            <BreadcrumbPage>Home</BreadcrumbPage>
          ) : (
            <BreadcrumbLink render={<Link to="/" />}>Home</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {routes.map((route, index) => {
          const routePath = `/${routes.slice(0, index + 1).join("/")}`;

          return (
            <Fragment key={routePath}>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                {index === routes.length - 1 ? (
                  <BreadcrumbPage>{route}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link to={routePath} />}>
                    {route}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};
