import './Skill-bar.scss'
import { useRef } from 'react'

import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);


function SkillBar({skillName = "Skill", maxProgres = "5", curProgres = "1", barId = "0"}) {

  let skillbarId = "#skillBar".concat(barId)
  let progressbarId = "#progressBar".concat(barId)
  
  let timeLine1 = new Timeline();
  let timeLine2 = new Timeline();
  useGSAP(() =>{
    // timeLine1.from(".skill-bar",{
    timeLine1.from(skillbarId,{
      scrollTrigger:{
          // trigger: ".skill-bar",
        // markers: true,
        trigger: skillbarId,
        start: "top+=-200 bottom",
        end: "top+=-200 bottom+=-200",
        scrub: 1,
      },
      y: 300,
      opacity: 0,
      duration: 2
    });

  timeLine2.from(progressbarId,{
    scrollTrigger:{
      // markers: true,
      trigger: skillbarId,
      start: "top+=-200 bottom",
      end: "top+=-200 bottom+=-200",
      
      // trigger: progressbarId,
      // start: "top bottom",
      // end: "top bottom",
      
      scrub: 0.5,
    },
    width: 0,
    // minWidth: 0 
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
      <div className='skill-bar' id={"skillBar".concat(barId)} ref={skillBarRef}>
        <div className='skill-bar-progres-bar' id={"progressBar".concat(barId)}
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