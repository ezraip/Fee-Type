import { FeeTypeList, FeeTypeCreate, FeeTyoeEdit } from "./pages";

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};


export const mainRoutes = [
  {
    title: "Dashboard",
    component: <Dashboard />,
    path: "/dashboard",
    exact: true,
  },
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