import React from "react";
import DataTable from "react-data-table-component";
import ActionBtn from "../../Components/ActionButton";
import SearchBar from "../../Components/SearchBar";
import { data, column } from "../../data/actionTN";

function ActionTn() {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="actiontn">
        <div className="topfilter">
          
          <div className="btns float-right">
            <ActionBtn
              classBtn="tkaction cbtn"
              dataToggle="modal"
              dataTarget="#take-action"
              label="Take an Action"
            />
            <ActionBtn
              classBtn="optbtn rbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Reset"
            />
            <span data-toggle="modal" data-target="#addtn">
              <ActionBtn
                classBtn="optbtn addbtn"
                dataToggle="tooltip"
                dataPlacement="top"
                title="Add"
              />
            </span>
            <ActionBtn
              classBtn="optbtn uploadbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Upload"
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

        <DataTable columns={column} data={data} selectableRows />

        <div className="cpagination">
          <ul className="float-right">
            <li>
              <a href="#" className="firstpage">
                First
              </a>
            </li>
            <li>
              <a href="#" className="prevpage"></a>
            </li>
            <li>
              <a href="#" className="active">
                10
              </a>
            </li>
            <li>
              <a href="#">11</a>
            </li>
            <li>
              <a href="#">....</a>
            </li>
            <li>
              <a href="#">25</a>
            </li>
            <li>
              <a href="#">26</a>
            </li>
            <li>
              <a href="#" className="nextpage"></a>
            </li>
            <li>
              <a href="#" className="lastpage">
                Last
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActionTn;
