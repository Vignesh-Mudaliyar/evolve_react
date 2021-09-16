import React, { useState } from "react";
import Sidebar from "../Components/AppSidebar";
import { Switch, Route } from "react-router-dom";
import routes from "../routes";
import Header from "../Components/Header";
const AdminLayout = () => {
  const [smallNav, setSmallNav] = useState("smallnav");
  return (
    <div className={`bgcolor ${smallNav}`}>
      <Sidebar setSmallNav={setSmallNav} />
      <div className="contentpart">
        <Header title="Total Number Management" />
        <Switch>
          {routes.map((route, i) => (
              <Route
                path={route.path}
                name={route.name}
                render={(props) => <route.component {...props} />}
                key={i}
              />
          ))}
        </Switch>
      </div>
    </div>
  );
};

export default React.memo(AdminLayout);
