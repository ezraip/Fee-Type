import { FeeTypeList, FeeTypeCreate, FeeTyoeEdit } from "./pages";

export const mainRoutes = [
  {
    title: "Fee Type",
    component: <FeeTypeList />,
    path: "/fee-type",
    exact: true,
  },
  {
    title: "Create Fee Type",
    component: <FeeTypeCreate />,
    path: "/fee-type/create",
    exact: true,
  },
  {
    title: "Edit Fee Type",
    component: <FeeTyoeEdit />,
    path: "/fee-type/:id",
    exact: true,
  },
];