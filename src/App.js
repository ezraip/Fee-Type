import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MainLayout } from "./layouts";
import { app, sidenav } from "./data";
import { authRoutes, mainRoutes } from "./routes";
import { AuthRoute } from "./auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { ListFeeType } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

library.add(fas);

const Layout = ({ children }) => (
  <MainLayout appName={app.name} sidenav={sidenav}>
    {children}
  </MainLayout>
);

const Dashboard = () => {
  return <h1>Dashboard</h1>;
};

function App() {
  return (
    <Router>
      <MainLayout sidenav={sidenav} />
      <div className="app-container">
        <Switch>
          {/* {mainRoutes.map(({ component, path, exact }) => (
          <Route exact={exact} key={path} path={path}>
            {component}
          </Route>
        ))} */}
          <Route exact path={"/dashboard"}>
            <Dashboard />
          </Route>
          <Route exact path={"/fee-type"}>
            <ListFeeType />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
