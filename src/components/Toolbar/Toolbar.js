import React from "react";
import "./Toolbar.css";
import { Link, Route, Switch } from "react-router-dom";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import Home from "../Home/Home";
import NowPlaying from "../NowPlaying/NowPlaying";
import Popular from "../Popular/Popular";
import TopRated from "../TopRated/TopRated";
import MovieDetail from "../MovieDetail/MovieDetail";

const toolbar = props => {
  return (
    <header className="toolbar">
      <nav className="toolbar_navigation">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="toolbar_logo">
          <a href="">EXERCISE MOVIE APPLICATION</a>
        </div>
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/nowPlaying">NOW PLAYING</Link>
            </li>
            <li>
              <Link to="/popular">POPULAR</Link>
            </li>
            <li>
              <Link to="/topRated">TOP RATED</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/nowPlaying" component={NowPlaying} />
        <Route path="/popular" component={Popular} />
        <Route path="/topRated" component={TopRated} />
        <Route path="/movieDetail/:id" component={MovieDetail} />
      </Switch>
    </header>
  );
};

export default toolbar;
