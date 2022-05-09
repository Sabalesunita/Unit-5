import { Navbar } from './components/Navbar';
import { Container } from './components/Container';
import './App.css';
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
import { themeTemplate } from './styles/style'
import {Appdiv} from './components/Div'


function App() {
  const {theme, handlechange}= useContext(ThemeContext);
  console.log(theme)
  return (
    <Appdiv theme={theme==="dark"? themeTemplate.darkapp : themeTemplate.lightapp} className="App">
      <Navbar></Navbar>
      <Container></Container>
    </Appdiv>
  );
}

export default App;
