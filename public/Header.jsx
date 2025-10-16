import gsap from "gsap"
import { useGSAP } from '@gsap/react';

import './Header.css'
import { Timeline } from 'gsap/gsap-core';
// gsap.registerPlugin(useGSAP); 

function Header() {
  return (
    <section>

      <div className='header'>
        <div className='headerPersonName'>David</div>
        <div className='headerButtons'>
            <div className='headerButton-1'>Contact</div>
            <div className='headerButton-2'> Expirience</div>
            <div className='headerButton-3'>Skills</div>
        </div>
      </div>
    </section>
  );
}
export default Header

