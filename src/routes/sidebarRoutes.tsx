import { NavLink } from "react-router-dom";
import { TSidebarItems, TUserRoutes } from "../types";

const sidebarRoutes = (items: TUserRoutes[], role: string) => {
  const sideBar = items.reduce((acc: TSidebarItems[], item) => {
    if (item.name && item.path) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: item.name,
        label: item.name,
        children: item.children.map((child) => ({
          key: child.name,
          label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
        })),
      });
    }

    return acc;
  }, []);
  return sideBar;
};

export default sidebarRoutes;
