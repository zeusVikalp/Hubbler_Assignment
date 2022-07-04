import './style.css';
import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import {storeRules, deleteRule,changeHead} from "../Redux/action";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import Switch from '@mui/material/Switch';


function Rules() {
    
    const [rules, setRules] = useState(""); 
    const [bool, setBool] = useState(false); 
    const dispatch=useDispatch();
    const listRule=useSelector((state)=>state.rule)
    
  
useEffect(()=>{
if(listRule.length>=5){
    setBool(true)
}else{
    setBool(false)
}
},[listRule])

const handleRule=()=>{
  
 dispatch(storeRules(rules));
 dispatch(changeHead(rules));

}

const handleDelRule=(key)=>{
  
 dispatch(deleteRule(key));
}

    return (
      <div className="main-rules-div">
          <div className='main-rules-div-1-2'>
              <img src="https://imgs.search.brave.com/NmtwTLOclRxc1ZZNIKf6Cka83JPSPq5EFXj-5dx0I6A/rs:fit:553:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/WkdOUUxpcnZJenRp/cFpKN0lyaTN3SGFH/VyZwaWQ9QXBp" alt="" className='nav-image-icon'/>
              <h4>Back to Stages</h4>
          </div>
   <br/>   <br/>   <br/>
       <h2>Rules  {listRule.length} </h2>
       <br/>
       <br/>
       <input type="text" className="rules-input-box" value={rules} onChange={(e)=> setRules(e.target.value)}/>
       <br/>
       <br/>
       {
           
           listRule.map((rule)=> <div className='main-rule-box'><div className='rule-box'><h5 onDoubleClick={()=>{
               dispatch()
           }}>{rule}</h5>
 <Switch defaultChecked/>

         </div> <div> <DeleteIcon onClick={handleDelRule} className="ui-icons" /></div></div>)
       }
       <br/>
     

       <button className="rules-btn-box" onClick={handleRule} disabled={bool}>Add New Rule</button>
      </div>
    );
  }
  
  export default Rules;