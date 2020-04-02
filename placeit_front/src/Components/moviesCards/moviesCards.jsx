import React, { Component } from 'react';
import '../moviesCards/moviesCards.css';
// import booking from '../Booking/booking.js'
import NewMovie from '../newMovie/newMovie.jsx';

class MoviesCard extends Component{
	constructor(){
    super();
    this.state = {
        movies: []
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/api/v1/movies')
    .then(results =>{
      return results.json()
    })
    .then(data => {
      this.setState({movies: data})
    })
    .catch(error => console.log(error))
  }

  render(){

    const movies = this.state.movies
    console.log(this.state.movies)
    // movies.map((movie, index) => {
      // style={"background-image:url ('" + movie.photo_url + "')"}
      return(
        
          
        <div className="movies-content">
         <NewMovie />
          <div className="date-row">
            <form action="" class="date-form" id="dateform">
              <div id="fechaDiv" class="selectDate">
              <label>Fechas</label>
              {datepicker()}
              <input type="text" name="daterange" id="date-filter" required />
              </div>
            </form>
          </div>
          

          {movies.map(function(movie, key){
            return(
          <div className="movie-card background-image" style={{background: "url("+ movie.photo_url +")", backgroundRepeat  : 'no-repeat'}}> 
            <div className="movie-header">
              <div className="header-icon-container header-icon">
              <button onClick={newBooking} id={movie.id} disabled={movie.fully_booked == true} class = "button btn-reserve ">RESERVAR</button>
              </div>
            </div>
            <div className="movie-content">
              <div className="movie-content-header">
                <a href="#">
                  <h3 className="movie-title">{movie.name}</h3>
                </a>
              </div>
            </div>
          </div>
            )
        })}
        </div>
      );
    // })
  }
}

export default MoviesCard