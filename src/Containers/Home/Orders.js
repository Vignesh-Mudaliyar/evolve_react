import React from "react";
import DataTable from "react-data-table-component";
import { column, data } from "../../data/ordersData";
import ActionBtn from "../../Components/ActionButton";
import SearchBar from "../../Components/SearchBar";

function Orders() {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active">
        <div className="topfilter">
          <SearchBar label="Search" />
          <div className="btns float-right">
            <ActionBtn
              classBtn="optbtn rbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Reset"
            />
            <ActionBtn
              classBtn="optbtn dbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Download"
            />
            <ActionBtn
              classBtn="optbtn fbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Filter"
            />
          </div>
        </div>

        <DataTable columns={column} data={data} />
      </div>
    </div>
  );
}

export default Orders;
