import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import Mission from '../Mission/index'



class MissionPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      items: []
    };

  }
  componentDidMount () {
    // const ROOT_URL = `http://localhost:8000/missions`
    const ROOT_URL = `https://launch-api-backend.herokuapp.com/missions`
    axios.get(ROOT_URL)
      .then(function (response) {
        let results = response.request.responseText
        let readresults = JSON.parse(results);
        let data = readresults['data']


        for(let i = 0; i < data.length; i++) {
          let mission = []
          let data1 = data[i]
          let rocket1 = data1['rocket']
          if(rocket1['name']!= null){
            let rocketname = rocket1['name']
            mission.push(rocketname)
          }
          else {
            mission.push('Rocket Name not found')
          }

          if(rocket1['wikiURL']!= null){
            let rocketwiki = rocket1['wikiURL']
            mission.push(rocketwiki)
          }
          else {
            mission.push('Rocket Wikipedia not found')
          }
          let launch = data1['location']

          if (launch['pads'][0]['name'] != null) {
            let launch_location = launch['pads'][0]['name']
            mission.push(launch_location)
          }
          else {
            mission.push('Launch Location not found')
          }

          if (launch['name'] != null) {
            let launch_agency = launch['name']
            mission.push(launch_agency)
          }
          else {
            mission.push('Launch Agency not found')
          }

          if (data1['net']!= null) {
            let mission_time = data1['net']
            mission.push(mission_time)
          }
          else {
            mission.push('Launch Date not-found')
          }

          if (data1['name']!= null) {
            let mission_name = data1['name']
            mission.push(mission_name)
          }
          else {
            mission.push('Mission Name not found')
          }

          if (launch['pads'][0]['agencies'].length > 0) {
            let launch_agency_wiki = launch['pads'][0]['agencies'][0]['wikiURL']
            mission.push(launch_agency_wiki)
          }
          else {
            mission.push('https://en.wikipedia.org/wiki/List_of_government_space_agencies')
          }

          this.setState({
            items: [...this.state.items, mission]
          })
        }
      }.bind(this))
      .catch(function (error) {
        console.log(error);
      });
    };



  render() {
    return (
      <div className={['mission-container', 'container'].join(' ')}>
        <h1 className="text-center">Upcoming Launches</h1>
        {this.state.items.map(itemData => <Mission key={this.state.items.indexOf(itemData)} missions={itemData} />)}
      </div>
    );
  }
}

export default MissionPage;
