// import { time } from "./action";
import { HEADING, STORE_ACTION, STORE_RULE,STORE_CONDITIONS, DELETE_RULE, TIME} from "./actionTypes";

const initState ={
    rule : [],
    isRule:true,
    action:[],
    curTime:"",
    heading:"Default User",
    condition:[],
    time:"7/4/2022 16:0:23",
}

const reducer = (state=initState,action) =>{
  
    switch(action.type){
     
        
        case STORE_RULE :

            let ruleList=[...state.rule,action.payload]
            return{...state,rule:ruleList, }

            case DELETE_RULE :
               
                let newRuleList= state.rule.filter((el,i)=> i !== action.payload)
                return{...state,rule:newRuleList, }


                case TIME :

               return{...state,time:action.payload, }


                    case HEADING:

                    return{...state,heading:action.payload, }


            case STORE_ACTION :

                let actionList=[...state.action,action.payload]
                return{...state,action:actionList }


                case STORE_CONDITIONS :

                    let conditionList=[...state.condition,action.payload]
                    return{...state,condition:conditionList, }
         

            default :
            return state;
    }
}

export {reducer}
