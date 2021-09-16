import React, { useEffect, useMemo, useState } from "react";
import ActionBtn from "../../../Components/ActionButton";
import SearchBar from "../../../Components/SearchBar";
import CustomAccordian from "../../../Components/CustomAccordian";
import FeatureData from "../../../data/user/feature";
import Pagination from "../../../Components/Pagination";

function Features() {
  const [accordData, setAccordData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
    const fData = [];
    const firstPageIndex = (currentPage - 1) * 10;
    const lastPageIndex = firstPageIndex + 10;
    const featureData = FeatureData.slice(firstPageIndex, lastPageIndex);
    featureData.map((data, i) => {
      const headers = ` <ul class="inforow accordion-header">
        <li class="tbcol1">
          <p>${data.name}</p>
        </li>
        <li class="tbcol2">
          <p>${data.code}</p>
        </li>
        <li class="tbcol3">
          <p>${data.date}</p>
        </li>
      </ul>`;
      const body = `<h6>Description</h6>
      <span>
       ${data.description}
      </span>
      <div class="permtable">
        <div class="tbhead2">
          <div class="pcol pcol1">
            <p>Permission</p>
          </div>
          <div class="pcol pcol2">
            <p>Description</p>
          </div>
        </div>
        <div class="tbbody">
          <div class="pcol pcol1">
            <p>${data.permission}</p>
          </div>
          <div class="pcol pcol2">
            <p>${data.permissionDescription}</p>
          </div>
        </div>
      </div>
      `;
      fData.push({ headers, body });
    });
    setAccordData(fData);
  }, [currentPage]);
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="features">
        <div className="topfilter">
          <SearchBar label="Search" />
          <div className="btns float-right">
            <ActionBtn
              classBtn="optbtn rbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Reset"
              onClick={() => setCurrentPage(1)}
            />

            <ActionBtn
              classBtn="optbtn dbtn"
              dataToggle="tooltip"
              dataPlacement="top"
              title="Download"
            />
          </div>
        </div>

        <div className="accordtable">
          <ul className="tbhead">
            <li className="tbcol1">
              <h5>Name</h5>
            </li>
            <li className="tbcol2">
              <h5>Code</h5>
            </li>
            <li className="tbcol3">
              <h5>Created On</h5>
            </li>
          </ul>
          <CustomAccordian data={accordData} defaultOpen={false} />
        </div>
        <Pagination
          currentPage={currentPage}
          totalCount={FeatureData.length}
          pageSize={10}
          onPageChange={(page) => {
            setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
}

export default Features;
