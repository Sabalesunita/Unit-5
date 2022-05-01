import { ADD_COUNTER } from "./action"
import {ADD_TODOS} from'./action'
export const reducer=(store, {type, payload})=>
{
    switch(type)
    {
        case ADD_COUNTER:
            return{...store, counter:store.counter+payload};
        case ADD_TODOS:
            return {...store, todos:[...store.todos, payload]}
        default:
            return store;
    }
}

