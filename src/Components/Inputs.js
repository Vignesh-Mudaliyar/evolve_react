import React,{useState} from 'react'


export function CheckBox({id,label,type,checked}) {
    const [check,setCheck] =useState({checkValue:[]});
        const handleCheck = (e) =>{
           
            if(e.target.checked)
            {
                e.target.checked =true;
               setCheck(...check, check.checkValue[e.target.value] = e.target.value);
                console.log(check);
            }
            else{
                e.target.checked= false;
            }
        }
    return (
        <div class="nkcheckbox">
        <input type={type} class="checkboxbtn" id={id} value={label} onChange={(e) => handleCheck(e)} />
           <label for={id} title={label}>{label}</label>
    </div> 
    )
}

export const PermissionSpan = ({show,setShow,value}) => {
    return (
        
        <li style={{display:show}}>
        <div class="ftag"><div onClick={() => setShow('none')} class="cnlbtn"></div>{value}</div>
            </li>
    );
}
