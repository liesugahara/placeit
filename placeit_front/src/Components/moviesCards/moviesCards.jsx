import React, { Component } from 'react';
import '../moviesCards/moviesCards.css';
// import booking from '../Booking/booking.js'
import NewMovie from '../newMovie/newMovie.jsx';

class MoviesCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    }
    this.filter = this.filter.bind(this);
    window.MyVar = this
  }


  componentDidMount() {
    fetch('http://localhost:3000/api/v1/movies')
      .then(results => {
        return results.json()
      })
      .then(data => {
        this.setState({ movies: data })
      })
      .catch(error => console.log(error))
  }

  filter = () => {
    $('#date-filter').daterangepicker({
      opens: 'left',
      autoApply: true
    }, function (start, end, label) {
      start = start.format('DD-MM-YYYY')
      end = end.format('DD-MM-YYYY')
      fetch('http://localhost:3000/api/v1/movies/movie_filter?start_date=' + start + '&end_date=' + end)
      .then(results => {
        return results.json()
      })
      .then(data => {
        window.MyVar.start_date = start
        window.MyVar.end_date = end
        window.MyVar.setState({ movies: data })
      })
      .catch(error => console.log(error))
    });
  }


  render() {
    const movies = this.state.movies

    return (


      <div className="movies-content">
        <NewMovie />
        <div className="date-row">
          <form action="" class="date-form" id="dateform">
            <div id="fechaDiv" class="selectDate">
              <label>Fechas</label>
              {this.filter()}
              <input type="text" name="daterange" id="date-filter" required />
              <button id= "reset" onClick={window.location.reload}>Reset</button>
            </div>
          </form>
        </div>


        {movies.map(function (movie, key) {
          return (
            <div className="movie-card background-image" style={{ background: "url(" + movie.photo_url + ")"}}>
              <div className="movie-header">
                <div className="header-icon-container header-icon">
                  <button onClick={newBooking} id={movie.id} disabled={movie.fully_booked == true} class="button btn-reserve ">RESERVAR</button>
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