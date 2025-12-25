// import { useRef, useState, useCallback } from 'react'
import { useState, useRef } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react';
import { Timeline } from 'gsap/gsap-core';
import { ScrollTrigger } from "gsap/ScrollTrigger"; 

gsap.registerPlugin(useGSAP); 
gsap.registerPlugin(ScrollTrigger);

function App() {
  // const [count, setCount] = useState(0)
  
  let testBoxRef = useRef();
  let timeLine1 = new Timeline();

  // let baseScrollTriggerConfig = {
  //   start: 'top 70%',
  //   end: 'bottom 30%',
  //   // onEnter, onLeave, onEnterBack, onLeaveBack
  //   toggleActions: 'restart pause reverse pause',
  // }

  // let baseAnimationConfig = {
  //   x: 200,
  //   duration: 1,
  //   ease: 'power2.inOut',
  // }
  let testBoxText = "Kill".concat(" me".concat(" plis"))
  let testBox = testBoxRef.current;
  useGSAP(() =>{
    // timeLine1.to(".testBox",{
    timeLine1.from(".testBox",{
      // scrollTrigger:{
        // trigger: ".testBox",
        // toggleActions: "restart pause reverse pause"
        // start: 'top 100%',
        // end: 'bottom 0%',
        // },
        scrollTrigger:{
          
        // markers: true,
        trigger: ".testBox",
        start: "top+=-200 bottom+=-100",
        // start: `${testBox.height} bottom+=-100`,
        // end: "top+=-200 center",
        end: "top+=-200 center",
        scrub: 1,
      },
      y: 300,
      opacity: 0,
      duration: 2
    });
  });

  return (
    <>
      <div className='testBoxesContainer'>
        <div className='testBox' ref={testBoxRef}>{testBoxText}</div>
        <div className='testBox' ref={testBoxRef}>Kill me</div>
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