import * as React from 'react';

import './Leftsidebar.css';
import GroupAvatars from './GroupAvatars';
import VerticalTab from './Verticaltab';
import CompanyListCard from './CompanyListCard';

export function Leftsidebar() {
  
    

  return (
    <section className='left-sidebar-container'>

      <div className='avatar-username'>
      <GroupAvatars />
      <span className='username'>@ dangote</span>
      </div>
      <VerticalTab />

      <div className='left-sidebar-companies'>
        <h3>Companies</h3>
        <CompanyListCard />
        <CompanyListCard />
        <CompanyListCard />
        <CompanyListCard />
        <CompanyListCard />
      </div>
      
    </section>
  );
}