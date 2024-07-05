import { ReactNode } from "react";

export type TSidebarItems = {
  key: string;
  label: ReactNode;
  children?: TSidebarItems[];
};
export type TUserRoutes = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserRoutes[];
};
