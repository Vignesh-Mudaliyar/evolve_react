import React from "react";
import InnerPage from "../../Layout/InnerPageLayout";
import Features from "../../Containers/UserManagement/Features/index.js";
import Groups from "../../Containers/UserManagement/Groups";
import Roles from "../../Containers/UserManagement/Roles";
import Users from "../../Containers/UserManagement/Users";

function UserManagement() {
  const tabs = [
    { name: "Users", component: <Users /> },
    { name: "Roles", component: <Roles /> },
    { name: "Groups", component: <Groups /> },
    { name: "Features", component: <Features /> },
  ];
  return <InnerPage breadCrumbLabel="User Management" tabs={tabs} />;
}

export default UserManagement;
