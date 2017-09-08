import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'
var firebase = require('firebase');
var config = {
  apiKey: "AIzaSyCOmubrc3gEd6LOW5UfRH5LVaL-GFgRCgk",
  authDomain: "not-so-awesome-project-45a2e.firebaseapp.com",
  databaseURL: "https://not-so-awesome-project-45a2e.firebaseio.com",
  projectId: "not-so-awesome-project-45a2e",
  storageBucket: "not-so-awesome-project-45a2e.appspot.com",
  messagingSenderId: "481329884022"
};
firebase.initializeApp(config);
const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class App extends Component {
constructor(props) {
  super(props);
  this.state = {dps:[],x:0};
  
}

  componentWillMount() {
 var _this = this;
    var ref = firebase.database().ref('/emotions');
    ref.once('value', function(snapshot) {
      snapshot.forEach(function(childSnapshot) {
        var childKey = childSnapshot.val();  
        var val = {x:_this.state.x,y:childKey.engagement}
        _this.setState({dps : _this.state.dps.push(val) , x :  _this.state.x + 1})
              
      });

    });
    

  }
  render() {
    return (
      <div className="App">
 	<LineChart width={1000} height={600} data={data}
            margin={{top: 80, right: 50, left: 20, bottom: 5}}>
       <XAxis dataKey="name"/>
       <YAxis/>
       <CartesianGrid strokeDasharray="3 3"/>
       <Tooltip/>
       <Legend />
       <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
       <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
         </div>
    );
  }
}

export default App;
