import { ListFeeType } from "./pages";

export const mainRoutes = [
  {
    title: "Fee Type",
    component: <ListFeeType />,
    path: "/fee-tyoe",
    exact: true,
  },
];

export const authRoutes = [
  {
    component: <ListFeeType />,
    path: "/dashboard",
    exact: true,
  },
];
