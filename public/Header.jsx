import './Header.scss'
import App from '../src/App';
import * as React from 'react';
// import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className='header'>
        <div className='header-person-name'><p>David</p></div>
        <div className='header-buttons'>
            <a className='header-button-1' href='#'><div>Contact</div></a>
            <a className='header-button-2' href='#'> Experience</a>
            <a className='header-button-3' href='#segment-3'>Skills</a>
            <a className='header-button-4' href='#'>About me</a>
        </div>
        <div className="header-colum-spacer"></div>
      </div>
    // <section>

    // </section>
  );
}
export default Header

