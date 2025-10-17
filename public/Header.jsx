import gsap from "gsap"
import { useGSAP } from '@gsap/react';

import './Header.scss'
import { Timeline } from 'gsap/gsap-core';
// gsap.registerPlugin(useGSAP); 

function Header() {
  return (
    <section>

      <div className='header'>
        <div className='headerPersonName'><p>David</p></div>
        <div className='headerButtons'>
            <a className='headerButton-1'><div>Contact</div></a>
            <a className='headerButton-2'> Experience</a>
            <a className='headerButton-3'>Skills</a>
        </div>
        <div className="columSpacer"></div>
      </div>
    </section>
  );
}
export default Header

