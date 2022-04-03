import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { MainLayout } from "./layouts";
import { sidenav } from "./data";
import { mainRoutes } from "./routes";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

library.add(fas);

// const Layout = ({ children }) => (
//   <MainLayout appName={app.name} sidenav={sidenav}>
//     {children}
//   </MainLayout>
// );

function App() {
  return (
    <Router>
      <MainLayout sidenav={sidenav} />
      <div className="app-container">
        <Switch>
          <Route exact path="/">
            <Redirect to="/fee-type" />
          </Route>
          {mainRoutes.map(({ component, path, exact }) => (
            <Route exact={exact} key={path} path={path}>
              {component}
            </Route>
          ))}
          {/* <Route exact path="/">
            <Redirect to="/fee-type" />
          </Route>
          <Route exact path={"/dashboard"}>
            <Dashboard />
          </Route>
          <Route exact path={"/fee-type"}>
            <FeeTypeList />
          </Route>
          <Route exact path={"/fee-type/create"}>
            <FeeTypeCreate />
          </Route>
          <Route exact path={"/fee-type/:id"}>
            <FeeTyoeEdit />
          </Route> */}
        </Switch>
        <div className="footer">
          © 2020 Bayu Buana Travel Services. All Rights Reserved.
        </div>
      </div>
    </Router>
  );
}

export default App;
