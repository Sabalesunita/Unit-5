import {legacy_createStore as createStore} from 'redux';
import {reducer} from './reducer';

const initState={ counter:0, todos:[] }
export const store= createStore(reducer, initState);

store.subscribe(()=>
{
    console.log("Subscribe:", store.getState())
});