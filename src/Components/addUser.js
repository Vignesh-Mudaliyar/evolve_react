// import Button from '@restart/ui/esm/Button';
import React,{useState} from 'react'
import { Modal,Button } from 'react-bootstrap'
import { CheckBoxData } from '../data/userManagement/RolesData';
import {CheckBox,PermissionSpan} from './Inputs';

function AddUser({showModal,setShowModal}) {
    const [focused,setFocused] = useState('');
    const [focusedNote,setFocusedNote] = useState('');
    const [focusedSearch,setFocusedSearch] = useState('');
    const [display1,setDisplay1] =useState('');
    const [display2,setDisplay2] =useState('');
    const [display3,setDisplay3] =useState('');
    const [display4,setDisplay4] =useState('');



    


const handleCancel = () =>{

    setDisplay1('none');
    setDisplay2('none');
    setDisplay3('none');
    setDisplay4('none');
    
    
    }
    return (
        <Modal
    dialogClassName="cformmodal"
    show={showModal}
    onHide={() => setShowModal(false)}
    animation={false}
    aria-labelledby="modal-dialog modal-dialog-scrollable"
  >
    <Modal.Header>
    <div class="innerbanner" style={{backgroundImage: 'url(images/bg2.jpg)'}}>
                 	<div class="modalbtns">
                 		<div class="fullmodal"></div>
                 		<div onClick={() => setShowModal(false)} class="closemodal ml-3" data-dismiss="modal" aria-label="Close"></div>
                 	</div>
                     <h3>Add New User</h3>
                 </div>
    </Modal.Header>
    <form class="cform">
    <Modal.Body style={{
      maxHeight: 'calc(100vh - 210px)',
      overflowY: 'auto'
     }}>
                        <div class="vscroll2">
                            <div class="fieldrow mt-1">
                                <h5 class="flabel">Basic Info</h5>
                                <div class="row">
                                     <div class={`col-12 col-lg-4 fieldcol ${focused}`}>
                                        <input type="text" name="" onBlur={(e) => {!e.target.value && setFocused('')}} onFocus={() => setFocused('focused')} class="form-control custfield" id="rname" />
                                        <label for="rname" class="animlable">Name*</label>
                                    </div>
                                </div>
                            </div>
                            <div class="fieldrow">
                            	<h5 class="flabel">Permissions</h5>
                            	<div class="row">
						  			<div class="col-12 fieldcol">
						  				<div class="toprow mt-0">
						  					<h6 class="flabel2 float-left">Assign Permission Group</h6>
						  					<div class="clearall" onClick={handleCancel}>CLEAR ALL</div>
						  					<div class="filterresults mt-2 mb-4">
									  			<ul>
                                                    <PermissionSpan show={display1} setShow={setDisplay1} value="Lorem Ispum 1" handleCancel={handleCancel} />
                                                    <PermissionSpan show={display2} setShow={setDisplay2} value="Lorem Ispum 2" handleCancel={handleCancel} />
                                                    <PermissionSpan show={display3} setShow={setDisplay3} value="Lorem Ispum 3" handleCancel={handleCancel} />
                                                    <PermissionSpan show={display4} setShow={setDisplay4} value="Lorem Ispum 4" handleCancel={handleCancel} />
                                                       

									  				
									  			</ul>
									  		</div>
						  					<h6 class="flabel2 float-left">Available List</h6>
						  					<div class="searchbar smallsearch float-left">
									  			<div class={`seachfield ${focusedSearch}`}>
									  				
                                        <input type="text" name="" onBlur={(e) => {!e.target.value && setFocusedSearch('')}} onFocus={() => setFocusedSearch('focused')} class="form-control custfield" id="search2" />

									  				<label for="search2" class="animlable">Search</label>
								  				</div>
									  		</div>
						  				</div>
						  				<div class="checkboxlists">	
                                            {CheckBoxData.map((checkbox,i) => (
                                                <CheckBox id={checkbox.id} label={checkbox.name} checked={checkbox.checked} type="checkbox" />
                                            ))}	
						  				</div>
						  				<div class="morefield"><span>+485 more</span></div>
						  			</div>
						  		</div>
                            </div>
                            <div class="fieldrow">
                                <h5 class="flabel">Others</h5>
                                <div class="row">
                                    <div class={`col-12 fieldcol ${focusedNote}`}>
                                        <textarea class="form-control custfield" onFocus={() => setFocusedNote('focused')} onBlur={(e) => !e.target.value && setFocusedNote('')} id="note" ></textarea>
                                        <label for="note" class="animlable">Notes</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
    </Modal.Body>
<Modal.Footer>
                        <div class="rowbtns">
                            <div class="float-right">
                                <button class="cmbtn">Cancel</button>
                                <button type="ubmit" class="cbtn cbtn2 ml-2">Add</button>
                            </div>
                        </div>
</Modal.Footer>
                    </form> 
  </Modal>
    
    )
}

export default AddUser
