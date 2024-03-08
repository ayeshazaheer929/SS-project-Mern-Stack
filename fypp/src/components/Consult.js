import React, { Component } from 'react'
import CommonSearchDoct from './CommonSearchDoct';
import SearchDoctor from './SearchDoctor';
export class Consult extends Component {
  render() {
    return (
      <div>
        
        <SearchDoctor/>
        <CommonSearchDoct/>
    
      </div>
    )
  }
}

export default Consult 


