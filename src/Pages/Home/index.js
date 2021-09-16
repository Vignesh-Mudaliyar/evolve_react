import React from "react";
import InnerPage from "../../Layout/InnerPageLayout";
import ActionTn from "../../Containers/Home/ActionTn";
import BulkAction from "../../Containers/Home/BulkAction";
import BulkTransaction from "../../Containers/Home/BulkTransaction";
import Orders from "../../Containers/Home/Orders";

function Home() {
  return (
    <div>
      <InnerPage
        breadCrumbLabel="Telephone Number Management"
        tab1={{ name: "Action on TN", component: <ActionTn /> }}
        tab2={{ name: "Orders", component: <Orders /> }}
        tab3={{ name: "Bulk Action", component: <BulkAction /> }}
        tab4={{ name: "Bulk Transaction", component: <BulkTransaction /> }}
      />
      <div className="filterbtn">
        <div className="filtertext">Filter</div>
      </div>
    </div>
  );
}

export default Home;
