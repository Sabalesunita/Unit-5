import './container.css'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { Main } from './Div'
import { themeTemplate } from '../styles/style'

export const Container=()=>{
    const {theme}= useContext(ThemeContext);
    
    return (
        <Main theme={theme ==="dark"?themeTemplate.darkmain:themeTemplate.lightmain} className='container'>
            <h1>{theme ==="dark"?"Dark Theme":"Light Theme"}</h1>
        </Main>
    )
}