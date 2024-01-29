import * as React from 'react';

import './Rightsidebar.css';
import TopServiceCard from './TopServiceCard';
import SuggestedUserCard from './SuggestUser';

export function Rightsidebar() {
  
    

  return (
    <section className='right-sidebar-container'>
        <TopServiceCard />
      <div className='right-sidebar-suggested-container'>
        <h3>Suggested</h3>
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
        <SuggestedUserCard />
      </div>
    </section>
  );
}