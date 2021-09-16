import React from "react";

function BulkAction() {
  return (
    <div className="tab-content">
      <div className="tab-pane fade show active" id="bulkaction">
        <div className="uploadfilbox">
          <div className="text">
            Don’t have files to show. Please upload file(s)
          </div>
          <div className="uploadfile">
            <div className="uploadlabel">
              <p>
                <span>Upload file(s)* here</span> Drag and drop, or click to
                select
              </p>
            </div>
            <input
              type="file"
              className="form-control custfileupload"
              multiple=""
            />
          </div>
          <div className="downloadrow text-right">
            <a href="#" className="downtemplate">
              Download Template
            </a>
          </div>
          <div className="uploadfilelists">
            <h4>Attach Files*</h4>
            <div className="filelists mCustomScrollbar">
              <ul>
                <li>
                  <p>AddTN_Files1.csv</p>
                  <div className="deletfile"></div>
                </li>
                <li>
                  <p>AddTN_Files2.csv</p>
                  <div className="deletfile"></div>
                </li>
                <li>
                  <p>AddTN_Files2.csv</p>
                  <div className="deletfile"></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="rowbtns text-center">
            <a href="#" className="bbtn resetbtn">
              Clear
            </a>
            <a href="#" className="cbtn tkaction visibbtn">
              Take an Action
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BulkAction;
