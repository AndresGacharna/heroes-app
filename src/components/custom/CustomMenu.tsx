import { Link, useLocation } from "react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { cn } from "cn";

export const CustomMenu = () => {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return pathname === path;
  };

  //   const isActive = (path: string) => pathname === path; // * Esta es la forma corta, pero es menos lejible que la de arriba

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link to="/" />}
            className={cn(
              isActive("/") && "bg-slate-200 focus:bg-slate-200", // Focus is to alter the original component and turn property to color selected if focused
              "rounded-md p-2",
            )}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Search */}
        <NavigationMenuItem>
          <NavigationMenuLink
            render={<Link to="/search" />}
            className={cn(
              isActive("/search") && "bg-slate-200 focus:bg-slate-200",
              "rounded-md p-2",
            )}
          >
            Search
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
