
import './App.css';
import {Button} from './components/button'

function App() {
  return (
    <div className="App">
     <Button theme={{
       background:"blue",
       color:"white",
       border:"none"
     }
     } 
     >Primary Button</Button>
     <Button theme={{
       background:"white",
       color:"grey",
       border:"0.5px solid gray"
     }
     } 
     >Default Button</Button>
     <Button theme={{
       background:"white",
       color:"grey",
       border:"0.5px dashed gray"
     }
     } 
     >Dashed Button</Button>
     <Button theme={{
       background:"white",
       color:"grey",
       border:"none"
     }
     } 
    >Text Button</Button>
     <Button theme={{
       background:"white",
       color:"rgb(37,145,254)",
       border:"none"
     }
     } 
     >Link Button</Button>
    </div>
  );
}

export default App;