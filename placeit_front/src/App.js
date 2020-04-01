import React from 'react';
import Sidebar from './Components/SideBar/sideBar.jsx';
import Content from './Components/Content/content.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <Content/>
      </div>
    </div>
  );
}
export default App;
