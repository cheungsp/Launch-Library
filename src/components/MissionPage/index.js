import React, { Component } from 'react';
// import { getMissions } from '../../utilities/requests';
import axios from 'axios';
import './style.css';



class MissionPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      items: ['one', 'two']
    };


  }
  componentWillMount () {
    const ROOT_URL = `http://localhost:8000/missions`

    axios.get(ROOT_URL)
      .then(function (response) {
        let results = response.request.responseText
        // console.log(results);
        let readresults = JSON.parse(results);
        // console.log(readresults)
        console.log(readresults['data'])
        let data = readresults['data']
        let data1 = data[0]
        console.log('data1: ');
        console.log(data1);
        let rocket1 = data1['rocket']
        console.log('rocket1: ');
        console.log(rocket1);
        let rocketname = rocket1['name']
        console.log(rocketname);
        let rocketwiki = rocket1['wikiURL']
        console.log(rocketwiki);

        // launch info



      //   for(let i = 0; i < data.length; i++) {
      //     this.setState({
      //       // items: [...this.state.items, data[i]]
      //       items: [...this.state.items, i]
      //     })
      //   }
      // }.bind(this))
    })
      .catch(function (error) {
        console.log(error);
      });

    };

    // componentDidMount: function() {
    //     this.serverRequest = $.get(this.props.source, function (result) {
    //       var lastGist = result[0];
    //       this.setState({
    //         username: lastGist.owner.login,
    //         lastGistUrl: lastGist.html_url
    //       });
    //     }.bind(this));
    //   }

    componentDidMount () {
      console.log(this.state.items);
    }


  render() {
      return(
          <div>
              <div>Items:
                {this.state.items}
              </div>
          </div>
      );
  }
}

export default MissionPage;
