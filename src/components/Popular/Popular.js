import React from 'react';
import './Popular.css';
import { Link } from "react-router-dom";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

const PopularItems = ({ items }) => (
  <div className="each-popularItems">
    <p>
      <Link to={`/movieDetail/${items.id}`}>
        <img src={baseImageUrl+items.poster_path} alt="movie poster"/>
      </Link>
    </p>
    <p className="each-popularItems-title">{items.original_title}</p>
  </div>
);

class Popular extends React.Component {
  state = {
    populars: []
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=dc656ff33b32aecb1b7d66a028f20f5f&language=en-US&page=1')
    .then(response => response.json())
    .then(json => this.setState({
      populars: json.results
    }))
  }

  render() {
    return (
      <div className="container popular">
        <div className="wrapper popular">
          <div className="title-bar popular">
            <p>Popular Movies</p>
          </div>
          <div className="content popular">
            <div className="content-contents popular">
              {this.state.populars.map(items => (
                <PopularItems items={items} key={items.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Popular;