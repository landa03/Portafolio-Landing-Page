import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from "../public/Header.jsx"
import Segment1 from "../public/Segment-1.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Segment1 />

    {/* <App /> */}
  </StrictMode>,
)
