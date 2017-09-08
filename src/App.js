import React, { Component } from 'react';
import EG from './components/EG'
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0, data: [{
        name: "",
        uv: 0
      }]
    };
    this.handlefirebase = this.handlefirebase.bind(this);
  }
  handlefirebase(val) {
    this.setState({ data: val })
  }

  componentWillMount() {
    var _this = this;
    var ref = firebase.database().ref('/emotions');
    ref.once('value', function (snapshot) {

      var data_copy = [];
      var x = 0;
      snapshot.forEach(function (childSnapshot) {
        var childKey = childSnapshot.val();
        data_copy.push({
          name: x,
          engagement: childKey.engagement,
          disgust: childKey.disgust
        })
        x++;
      });
      _this.handlefirebase(data_copy)
    });


  }
  render() {
    return (
      <div className="App">
      <EG data={this.state.data} />
      </div>
    );
  }
}

export default App;
