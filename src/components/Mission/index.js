import React, { Component } from 'react';
import './style.css';

class Mission extends Component {

  // componentWillMount() {
  //     // this.props.fetchItems();
  //     console.log(this.props['missions']);
  //   }

  render() {
    return (
      <div>
        <div className="mission-name">
          <h4>{this.props['missions'][5]}</h4>
        </div>
        <h4>Launch Date: {this.props['missions'][4]}</h4>
        <h4>Rocket Name: {this.props['missions'][0]}</h4>
        <h4><a href={this.props['missions'][1]}>Rocket's Wiki</a></h4>
        <h4>Launching From: {this.props['missions'][3]}</h4>
        <h4>Launch Agency: {this.props['missions'][2]}</h4>
        <h4><a href={this.props['missions'][6]}>Launch Agency's Wikipedia</a></h4>
        <hr className='line'/>
      </div>
    )
  }
}

export default Mission
