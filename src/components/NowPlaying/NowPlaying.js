import React from "react";
import "./NowPlaying.css";
import { Link } from "react-router-dom";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

const NowPlayingItems = ({ items }) => (
  <div className="each-nowPlayingItems">
    <p>
      <Link to={`/movieDetail/${items.id}`}>
        <img src={baseImageUrl+items.poster_path} alt="movie poster"/>
      </Link>
    </p>
    <p className="each-nowPlayingItems-title">{items.original_title}</p>
  </div>
);

class NowPlaying extends React.Component {
  state = {
    nowPlayings: []
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=dc656ff33b32aecb1b7d66a028f20f5f&language=en-US&page=1')
    .then(response => response.json())
    .then(json => this.setState({ 
      nowPlayings: json.results
    }));
  }

  render() {
    return (
      <div className="container nowply">
        <div className="wrapper nowply">
          <div className="title-bar nowply">
            <p>Now Playing Movies</p>
          </div>
          <div className="content nowply">
            <div className="content-contents nowply">
              {this.state.nowPlayings.map(items => (
                <NowPlayingItems items={items} key={items.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NowPlaying;