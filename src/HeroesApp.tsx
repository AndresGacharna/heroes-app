import { appRouter } from "./router/app.routes";
import { RouterProvider } from "react-router";

export const HeroesApp = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};
