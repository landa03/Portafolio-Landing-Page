import './Skill-bar.scss'
import { useRef } from 'react'


function SkillBar({skillName = "Skill", maxProgres = "5", curProgres = "1"}) {

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
      <div className='skill-bar' ref={skillBarRef}>
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