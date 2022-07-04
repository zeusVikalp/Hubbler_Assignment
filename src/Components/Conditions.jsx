import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { storeConditions } from "../Redux/action";
import React, {useState, useEffect} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
function Conditions() {
    const [condition, setCondition] = useState(""); 
    const dispatch=useDispatch();
    const rule1=useSelector((state)=>state.heading)
  const [bool, setBool] = useState(false); 
    const listCondition=useSelector((state)=>state.condition)

    useEffect(()=>{
      
        if(listCondition.length>=8){

            setBool(true)
        }else{
            setBool(false)
        }
        },[listCondition])
        
    const handleCondition=()=>{
  

        dispatch(storeConditions(condition));
    
       
       }

    return (
      <div className="App">
       
  {
       <h1>{rule1}</h1>
  }
         <h4>Button Name</h4>

        <input type="text" className="conditions-input-box" value ="Create Po"/>
       <br/>
       <br/>
       <select className="conditions-select-box">
           <option>If All</option>
       </select>
       <span> Of the Following Conditions are met:</span>
       <br/>
       <br/>
       <br/>

       <div className="conditions-todo-main">
       <select className="conditions-select-box">
           <option>Text</option>
       </select>
       <select  className="conditions-select-box">
           <option>Contains</option>
       </select>
       <button className="conditions-btn-box-1-todo"> Urgent</button>
       <input type="text" className="conditions-input-box-1-todo"  value={condition} onChange={(e)=> setCondition(e.target.value)}/>
       </div>
       <br/>
       <br/>
       <br/>
       {
           listCondition.map((condition)=> <div className='main-rule-box' ><div className='rule-box' >

               <h3>{condition}</h3>

               </div>
           <div> <DeleteIcon className="ui-icons" /></div>
           </div>)
       }
       <br/>
       <br/>

       <button className="conditions-btn-box" onClick={handleCondition} disabled={bool} >Add New Conditions
          
       </button>
     
      </div>
    );

  }
  
  export default Conditions;