// import logo from './logo.svg';
// import {store} from './Redux/store'
import './App.css';
import {addCounter} from './Redux/action'
import {useSelector,useDispatch} from 'react-redux'
import { Todos } from './components/Todos';

function App() {
  // console.log(store.getState().counter)
  const dispatch= useDispatch();
  const counter= useSelector((store)=>store.counter)

  return (
    <div className="App">
      {/* <div>
      <h1>COUNTER: {counter}</h1>
      <button onClick={()=>{
        dispatch(addCounter(1))
      }}>Add1</button>
      </div> */}
      <div>
        <Todos></Todos>
      </div>
    </div>
  );
}

export default App;
