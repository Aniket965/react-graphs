import React, { Component } from 'react'
import { Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
export default class Home extends Component {

  render() {
    return (
<div>  
<h1  style={{marginLeft: '10vw',marginTop:"10vh", fontFamily: 'Encode Sans Condensed', fontSize: '5rem' }}>Instructor Dashboard</h1>
    
      <div style={{marginTop:"33vh",marginLeft:'33vw'}}>
        <Button.Group size="massive">
    <Button size="massive"
    >
    <Link to="/ve" style={{color:"red"}}>Video Engagement</Link>
    </Button>
    <Button.Or text='OR'/>
    <Button positive size="massive">
    <Link to="/cs" style={{color:"white"}}>Comments Sentiments</Link>
     </Button>
  </Button.Group>
      </div>
    </div>
    )
  }
}
