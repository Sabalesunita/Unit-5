export const ADD_COUNTER= "ADD_COUNTER";
export const ADD_TODOS= "ADD_TODOS"
export const addCounter= (payload)=>{
  return {
      type: ADD_COUNTER,
      payload
  }  
} 
export const addTodos= (data)=>{
    return {
        type: ADD_TODOS,
        payload:data
    }  
  } 