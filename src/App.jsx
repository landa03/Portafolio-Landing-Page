// import { useRef, useState, useCallback } from 'react'
import { useState, useRef } from 'react'
import './App.css'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);

function App() {
  // const [count, setCount] = useState(0)
  
  let testBoxRef = useRef();
  let horizontalScrollContainerRef = useRef();
  let timeLine1 = new Timeline();
  let timeLine2 = new Timeline();

  // let horizontalTestBoxes = querySelectorAll(".horizontalScrollItem");
  let horizontalTestBoxes = document.getElementsByClassName(".horizontalScrollItem");

  let testBoxText = "Kill".concat(" me".concat(" plis"))
  // let testBox = testBoxRef.current;
  useGSAP(() =>{
    timeLine1.from(".testBox",{
        scrollTrigger:{
        trigger: ".testBox",
        start: "top+=-200 bottom+=-100",
        end: "top+=-200 center",
        scrub: 1,
      },
      y: 300,
      opacity: 0,
      duration: 2
    });

    timeLine2.to(horizontalScrollContainerRef, {
      scrollTrigger: {
        // markers: true,
        trigger: ".horizontalScrollContainer",
        horizontal: true,
        start: "left top",
        end: "left",
        scrub: 1,
      },
      forEach(horizontalTestBoxe, horizontalTestBoxes){
        
      }
    });
  });

  return (
    <>
      <div className='testBoxesContainer'>
        <div className='testBox' ref={testBoxRef}>{testBoxText}</div>
        <div className='testBox' ref={testBoxRef}>Kill me</div>
      </div>

      {/* <div className='horizontalScrollContainer' ref={horizontalScrollContainerRef}> */}
      <div className='horizontalScrollContainer' id='horizontalScrollContainer1'>
        <div className='horizontalScrollItem testBox' id='testBox1'>Kill poop #1</div>
        <div className='horizontalScrollItem testBox' id='testBox2'>Kill poop #2</div>
        <div className='horizontalScrollItem testBox' id='testBox3'>Kill poop #3</div>
        <div className='horizontalScrollItem testBox' id='testBox4'>Kill poop #4</div>
        <div className='horizontalScrollItem testBox' id='testBox5'>Kill poop #5</div>
        <div className='horizontalScrollItem testBox' id='testBox6'>Kill poop #6</div>
      </div>

      <div className='bottomGap'></div>
    </>
  )
}

export default App


//  .from()
// gsap.from('.cube', {
//   x: '10rem',
//   duration: 1,
//   ease: 'power2.inOut',
//   backgroundColor: 'blue',
// })



// scrub
// gsap.to('.cube', {
//   scrollTrigger: {
//     trigger: '.cube',
//     scrub: 3,

//     ...baseScrollTriggerConfig,
//     },
//   ...baseAnimationConfig,
// })



//  scroll triger basic
// const baseScrollTriggerConfig = {
//   start: 'top 70%',
//   end: 'bottom 30%',
//   // onEnter, onLeave, onEnterBack, onLeaveBack
//   toggleActions: 'restart pause reverse pause',
// }

// const baseAnimationConfig = {
//   x: '20rem',
//   duration: 1,
//   ease: 'power2.inOut',
//   backgroundColor: 'blue',
// }

// // Animation
// gsap.to('.cube', {
//   scrollTrigger: {
//     trigger: '.cube',

//     ...baseScrollTriggerConfig,
//   },
//   ...baseAnimationConfig,
// })