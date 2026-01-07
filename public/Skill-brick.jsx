import './Skill-bricks.scss'
// import { useRef } from 'react'

import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);

function SkillBrick({skillName = "Skill",  brickId = "0"}) {
    
    let skillBrickId = '#skillBrick'.concat(brickId);
    let timeLine1 = new Timeline();
    let startMarkerPosition = parseInt(brickId)*32;
    
    useGSAP(() =>{
        timeLine1.from(skillBrickId,{
            scrollTrigger: {
                trigger: ".skillBrick",
                // markers: true,
                start: "top+=-200 bottom+=-".concat(startMarkerPosition),
                end: "top+=-200 bottom+=-".concat(startMarkerPosition+200),
                scrub: 1,
            },
            y: 300,
            opacity: 0,
        });
    });

    return (
        <div className='skillBrick' id={'skillBrick'.concat(brickId)}>{skillName}</div>
    );
}

export default SkillBrick