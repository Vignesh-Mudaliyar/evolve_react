
import React,{useState} from 'react';
import DataTable from 'react-data-table-component';
import AddUser from '../../Components/addUser';
import { column, data } from '../../data/userManagement/RolesData';
import ActionBtn from '../../Components/ActionButton'
import SearchBar from '../../Components/SearchBar'

function Roles() {
    const [showModal,setShowModal] = useState(false);

    return (
        <>
        <div class="tab-pane fade show" id="roles">
				  		<div class="topfilter">
                          <SearchBar label="Search" />

					  		<div class="btns float-right">
                                  
                              <ActionBtn
                                classBtn="optbtn rbtn"
                                dataToggle="tooltip"
                                dataPlacement="top"
                                title="Reset"
                                />

                            <span data-toggle="modal" data-target="#addrole" onClick={() => {setShowModal(true);console.log('true',showModal)}}> 
                                 <ActionBtn
                                classBtn="optbtn addbtn"
                                dataToggle="tooltip"
                                dataPlacement="top"
                                title="Add"
                                
                                /></span>

                                <ActionBtn
                                classBtn="optbtn dbtn"
                                dataToggle="tooltip"
                                dataPlacement="top"
                                title="Download"
                                />

					  		</div>
					  	</div>
					  	<div class="datatable" style={{backgroundColor:'red'}}>
							<DataTable data={data} columns={column}  customStyles={{backgroundColor:'red'}} />
						</div>
						<div class="cpagination">
							<ul class="float-right">
								<li><a href="#" class="firstpage">First</a></li>
								<li><a href="#" class="prevpage"></a></li>
								<li><a href="#" class="active">10</a></li>
								<li><a href="#">11</a></li>
								<li><a href="#">....</a></li>
								<li><a href="#">25</a></li>
								<li><a href="#">26</a></li>
								<li><a href="#" class="nextpage"></a></li>
								<li><a href="#" class="lastpage">Last</a></li>
							</ul>
						</div>
				  	</div>
                      <AddUser showModal={showModal} setShowModal={setShowModal} />
                      </>
      

    )
}

export default Roles
