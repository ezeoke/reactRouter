import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
 return (
  <div>
   <p>Aba Business Directory</p>
  <NavLink to='/' activeClassName='active-class'>Home</NavLink>
  <NavLink to='/commodity' activeClassName='active-class'>Commodities</NavLink>
  <NavLink to='/farm' activeClassName='active-class'>Farm Produce</NavLink>
  <NavLink to='/mines' activeClassName='active-class'>Mines</NavLink>
  <NavLink to='/tradesmen' activeClassName='active-class'>Tradesmen</NavLink>
  <NavLink to='/traders' activeClassName='active-class'>Traders</NavLink>
  <NavLink to='/labour' activeClassName='active-class'>Unskilled Labour</NavLink>
  </div>
 )
}

export default Header;