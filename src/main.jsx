import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App.jsx'
import Header from "../public/Header.jsx"
import Segment1 from "../public/Segment-1.jsx"
import Segment2 from "../public/Segment-2.jsx"
import Segment3 from "../public/Segment-3.jsx"
import Segment4 from "../public/Segment-4.jsx"

// import { gsap } from "gsap"
// import { useGSAP } from '@gsap/react';
// import { Timeline } from 'gsap/gsap-core';
// import { ScrollTrigger } from "gsap/ScrollTrigger";.

// gsap.registerPlugin(useGSAP); 
// gsap.registerPlugin(ScrollTrigger);

// let timeLine1 = new Timeline();
let rootElement = document.getElementById("root");
// console.log(rootElement)
let backgroundYPosition = 0

// useGSAP(() => {
//   timeLine1.to(rootElement,{
//     // backgroundYPosition: 120,
//     x: 0,
//   });
// });

let backgroundPosition = rootElement.style.backgroundPosition;

let backgroundMoveUp = [
  {backgroundPosition: "82% 0px"},
  {backgroundPosition: "82% -120px"},
  // {backgroundYPosition: 0},
  // {backgroundYPosition: 120},
  // {rootElement.style.backgroundPosition = "82% 0px"},
];

let backgroundTiming = {
  duration: 6000,
  iterations: Infinity,
};


window.onload = rootElement.animate(backgroundMoveUp, backgroundTiming);

rootElement.style.backgroundPosition = "82% ".concat("-").concat(backgroundYPosition).concat("px");

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Segment1 />
    <Segment2 />
    <Segment3 />
    <Segment4 />
    {/* <App /> */}

    {/* <App /> */}
  </StrictMode>,
)
