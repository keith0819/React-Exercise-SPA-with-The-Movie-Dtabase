import React from "react";
import './TopRated.css';
import { Link } from "react-router-dom";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

const TopRatedItems = ({ items }) => (
  <div className="each-topRatedItems">
    <p>
      <Link to={`/movieDetail/${items.id}`}>
      <img src={baseImageUrl+items.poster_path} alt="movie poster"/>
      </Link>
    </p>
    <p className="each-topRatedItems-title">{items.original_title}</p>
  </div>
);

class TopRated extends React.Component {
  state = {
    topRateds: []
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=dc656ff33b32aecb1b7d66a028f20f5f&language=en-US&page=1')
    .then(response => response.json())
    .then(json => this.setState({
      topRateds: json.results
    }))
  }

  render() {
    return (
      <div className="container topRated">
        <div className="wrapper topRated">
          <div className="title-bar topRated">
            <p>Top Rated Movies</p>
          </div>
          <div className="content topRated">
            <div className="content-contents topRated">
              {this.state.topRateds.map(items => (
                <TopRatedItems items={items} key={items.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TopRated;
