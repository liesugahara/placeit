import React from 'react';
import Sidebar from './Components/SideBar/sideBar.jsx';
//import Content from './Components/Content/content.jsx';
import MoviesCard from './Components/moviesCards/moviesCards.jsx';
import Booking from './Components/Booking/booking.jsx';

import './App.css';


function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <MoviesCard/>
      </div>
    </div>
  );
}
export default App;
