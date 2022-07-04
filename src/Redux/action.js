import {STORE_RULE,STORE_ACTION, HEADING,STORE_CONDITIONS, DELETE_RULE,TIME} from './actionTypes';

const storeRules=(rules)=> ({
    type : STORE_RULE,
    payload : rules,
    
})
const time1=(times)=> ({
    type : TIME,
    payload : times,
    
})
const storeActions=(actions)=> ({
    type : STORE_ACTION,
    payload : actions,
    
})
const storeConditions=(conditions)=> ({
    type : STORE_CONDITIONS,
    payload : conditions,
    
})

const deleteRule=(key)=> ({
    type : DELETE_RULE,
    payload:key
    
})

const changeHead=(headings)=>({
   
        type:HEADING,
      payload:headings,
        
   
})




export {storeRules,storeActions,storeConditions,changeHead,deleteRule,time1}