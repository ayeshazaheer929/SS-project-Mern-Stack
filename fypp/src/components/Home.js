import React, { Component } from 'react'
import AskQuestions from './AskQuestions';

import Promotions from './Promotions';
import SearchDoctor from './SearchDoctor';
import Services from './Services';
import UserReviews from './UserReviews';

export class Home extends Component {
  render() {
    return (
        <>
      <div>
        <SearchDoctor/>
    <Services/>
    <Promotions/>
    <AskQuestions/>
    <UserReviews/>
        
      </div>
      </>
    )
  }
}

export default Home
