import './Skill-bar.scss'
import { useRef } from 'react'

import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);


function SkillBar({skillName = "Skill", maxProgres = "5", curProgres = "1", barId = "skillBar0"}) {

  let skillbarId = "#".concat(barId)
  
  let timeLine1 = new Timeline();
  useGSAP(() =>{
    // timeLine1.from(".skill-bar",{
    timeLine1.from(skillbarId,{
        scrollTrigger:{
        markers: true,
        // trigger: ".skill-bar",
        trigger: skillbarId,
        start: "top+=-200 bottom",
        end: "top+=-200 bottom+=-200",
        scrub: 1,
      },
      y: 300,
      opacity: 0,
      duration: 2
    });
  });


  // 100% - sbpb (?)
  // mP - cP
  // (cP/mP)*100 = sbpb
  let timeMesure = "years"

  if (curProgres > 1) {
    timeMesure = "years"
  } else{
    timeMesure = "year"
  }

  let skillBarRef = useRef(); 
  let skillNameRef = useRef(); 
    return (
      // <div className='skill-bar' id={skillName + "_skillBar"} ref={skillBarRef}>
      <div className='skill-bar' id={barId} ref={skillBarRef}>
        <div className='skill-bar-progres-bar'
        style={{width: `${(curProgres/maxProgres)*100}%`, minWidth: `fit-content`, maxWidth: `${skillBarRef.width - skillNameRef.width}`}}>
          <div className='skill-name' ref={skillNameRef} >
            {skillName} 
          </div>
        </div>
        <div className='skill-bar-progres-text'>{curProgres} {timeMesure}</div>
      </div>
    );
}
export default SkillBar