
import stat from './Stats.png';
import map from './Maps.png';
import shopping from './Shopping.png';
import message from './Messages.png';
import files from './Files.png';
import setting from './Settings.png';
import avatar from '../src/Bitmap.png'
import './App.css';

import { SideBar } from './components/sidebar';
import { SidebarItem } from './components/sidebarItem';
import { User, Status, Avatar } from './components/user';
import { BodyElem } from './components/body'


function App() {

  return (
    <div className="App">
      <SideBar>
        <User>
          <Status>
            <div></div>
          </Status>
          <Avatar>
            <img src={avatar} alt="" />
          </Avatar>
        </User>
        <SidebarItem id="stat"><img src={stat} alt="" /></SidebarItem>
        <div className='seperate'></div>
        <SidebarItem id="map"><img src={map} alt="" /></SidebarItem>
        <div className='seperate'></div>
        <SidebarItem id="shopping"><img src={shopping} alt="" /></SidebarItem>
        <div className='seperate'></div>
        <SidebarItem id="message"><img src={message} alt="" /></SidebarItem>
        <div className='seperate'></div>
        <SidebarItem id="files"><img src={files} alt="" /></SidebarItem>
        <div className='seperate'></div>
        <SidebarItem id="setting"><img src={setting} alt="" /></SidebarItem>
        <div className='seperate'></div>
      </SideBar>

      <BodyElem></BodyElem>

    </div>
  );
}

export default App;
