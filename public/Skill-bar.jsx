import './Skill-bar.scss'
import { useRef } from 'react'


function SkillBar({skillName = "Skill", maxProgres = "5", curProgres = "3"}) {

  // 100% - sbpb (?)
  // mP - cP
  // (cP/mP)*100 = sbpb

  let skillBarWidth = useRef(); 
    return (
      <div className='skill-bar' ref={skillBarWidth}>
        <div className='skill-bar-progres-bar'>
          <div className='skill-name' 
            style={{width: `${(curProgres/maxProgres)*100}%`, minWidth: `fit-content`}}> 
            {skillName} 
          </div>
        </div>
        <div className='skill-bar-progres-text'>{curProgres} years</div>
      </div>
    );
}
export default SkillBar