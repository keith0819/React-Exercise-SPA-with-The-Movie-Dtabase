import React from "react";
import "./MovieDetail.css";

const baseImageUrl = "https://image.tmdb.org/t/p/w500";

class MovieDetail extends React.Component {
  state = {
    details: []
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=dc656ff33b32aecb1b7d66a028f20f5f&language=en-US`
    )
      .then(response => response.json())
      .then(json =>
        this.setState({
          details: json
        })
      );
  }

  render() {
    const { details } = this.state;
    console.log(this.props);
    return (
      <div className="container">
        <div className="wrapper">
          <div className="content">
            <div className="content-main_container">
              <div className="content-main_wrapper">
                <div className="content-main">
                  <div className="content-main_image">
                    <p>
                      <img
                        src={baseImageUrl + details.poster_path}
                        alt="Movie Poster"
                      />
                    </p>
                  </div>
                  <div className="content-main_info">
                    <p>{details.original_title}</p>
                    <p>Release date: {details.release_date}</p>
                    <p>
                      <a href={details.homepage}>{details.homepage}</a>
                    </p>
                    <p>{details.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetail;
