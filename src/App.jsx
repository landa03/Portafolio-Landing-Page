// import { useRef, useState, useCallback } from 'react'
import { useState, useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Timeline } from 'gsap/gsap-core';


gsap.registerPlugin(useGSAP); 

function App() {
  // const [count, setCount] = useState(0)

  let testBoxRef = useRef();
  let timeLine1 = new Timeline();

  useGSAP(() =>{
    timeLine1.to(testBoxRef.current,{
      x: 200,
      duration: 3,
      delay: 1
    });
  });

  return (
    <>
      <div className='testBox' ref={testBoxRef}>poop</div>
    </>
  )
}

export default App
