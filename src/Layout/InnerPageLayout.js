import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import NavTab from "../Components/NavTabs";

export default function InnerPageLayout({ breadCrumbLabel, tabs }) {
  return (
    <div className="innerconts">
      <Breadcrumb label={breadCrumbLabel} />
      <div className="tablinks">
        <NavTab tabs={tabs} />
      </div>
    </div>
  );
}
