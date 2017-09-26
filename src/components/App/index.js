import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MissionPage from '../MissionPage/index'
import './style.css';



class App extends Component {

  // var sectionStyle = {
  //   width: "100%",
  //   height: "400px",
  //   backgroundImage: "url(" + { wallpaper.jpg } + ")"
  // };
  /* <img className="background-pic" src={`img/wallpaper.jpg`} /> */

  render() {
    return (
      <div className="wrapper">
        <Router>
          <div>
            <h1>Does this work?</h1>
            <Switch>
              <Route path="/missions" component={MissionPage} />
              {/* <Route path="/items/:id" component={ItemsShow} /> */}
              {/* <Route path="/" component={ItemsIndex} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
