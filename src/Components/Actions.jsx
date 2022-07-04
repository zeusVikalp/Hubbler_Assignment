import './style.css';
import React, {useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import {storeActions} from "../Redux/action";
import { useSelector } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
function Actions() {

    const [action, setAction] = useState(""); 
    const dispatch=useDispatch();
    const listAction=useSelector((state)=>state.action)
    const [bool, setBool] = useState(false); 

    useEffect(()=>{
      
      if(listAction.length>=5){
          setBool(true)
      }else{
          setBool(false)
      }
      },[listAction])


const handleAction=()=>{
  

    dispatch(storeActions(action));

   
   }
    return (
      <div className="App">
        <span>Perform the Following Action:</span><br/><br/>
        <input type="text" className="actions-input-box" value={action} onChange={(e)=> setAction(e.target.value)}/>
       <br/>
       <br/><br/>
       {
           listAction.map((action)=> <div className='main-rule-box' ><div className='rule-box'><h3>{action}</h3>
           </div>
           <div> <DeleteIcon className="ui-icons" /></div>
           </div>)
       }
       <br/>
       <hr/>
       <br/>
       
       <button className="actions-btn-box" onClick={handleAction} disabled={bool}>Add Another Action</button>
      </div>
    );
  }
  
  export default Actions;