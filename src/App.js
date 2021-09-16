import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// import AdminLayout from "./Layout/AdminLayout";
const AdminLayout = React.lazy(()=>import('./Layout/AdminLayout'))
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  return (
    <React.Suspense fallback={loading}>
      <Router>
        <Switch>
          <Route path="/" render={(props) => <AdminLayout {...props} />} />
        </Switch>
      </Router>
    </React.Suspense>
  );
}

export default App;
