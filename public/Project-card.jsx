import './Project-card.scss'

import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);

let thisProjectLinck = '#'
let thisProjectImgPath = ''

// function ProjectCard({projectTitle, projectLinck, projectImgPath}) {
function ProjectCard({projectTitle = "Project title", cardId = "0"}) {
  
  let timeLine1 = new Timeline();
  let timeLine2 = new Timeline();
  let projectCardId = '#project-card'.concat(cardId);
  // console.log(projectCardId);
  let markerPositon = parseInt(cardId)*16
  // let cardContainer = document.getElementById(projectCardId).parentNode;
  // let cardContainer = document.getElementById(projectCardId).parentElement;
  // let cardContainer = document.getElementById(projectCardId).closest(".project-card-holder");
  // let cardContainer = document.getElementById(projectCardId);
  // let cardContainer = document.getElementsByClassName(".project-card-holder");
  let cardContainer = document.getElementsByClassName("segment-2-projects");
  // id fue solisitada antes de ser asignada

  // console.log(cardContainer.length)
  if (projectCardId == "") {
    console.warn("empty card id");
  }

  useGSAP(() =>{
    timeLine1.from(projectCardId,{
      scrollTrigger: {
        trigger: projectCardId,
        // markers: true,
        start: "top+=100 bottom+=-".concat(markerPositon),
        end: "top+=100 bottom+=-".concat(markerPositon+100),
        scrub: 1,
      },
      x: 300,
      opacity: 0,
      duration: 2,
    });

    timeLine2.from(projectCardId,{
      scrollTrigger: {
        horizontal: true,
        trigger: projectCardId,
        // trigger: cardContainer,
        // markers: true,
        start: "left left+=100",
        end: "left left",
        scrub: 1,
      },
      x: -300,
      opacity: 0,
      duration: 2,
    });
  });

    return (
    <div className='project-card' id={'project-card'.concat(cardId)}>
        <div className='project-card-title'>
          {/* <p>Project 1</p> */}
          <p>{projectTitle}</p>
          <a href={thisProjectLinck}>
            <img src={thisProjectImgPath} alt="" />
          </a>
        </div>
    </div>      
  );
}
export default ProjectCard