import './Segment-3.scss'

import SkillBar from "../public/Skill-bar"

function Segment3() {
  return (
    <div className='segment-3-body'>
      <div className='segment-title'>My Skills and Advantages</div>
      <SkillBar skillName = "HTML" maxProgres = "5" curProgres = "5" barId = "skillBar1" />
      <SkillBar skillName = "CSS" maxProgres = "5" curProgres = "5" barId = "skillBar2" />
      <SkillBar skillName = "JS" maxProgres = "5" curProgres = "4" barId = "skillBar3" />
      <SkillBar skillName = "TS" maxProgres = "5" curProgres = "1" barId = "skillBar4" />
      <SkillBar skillName = "React" maxProgres = "5" curProgres = "2" barId = "skillBar5" />
      <SkillBar skillName = "SASS" maxProgres = "5" curProgres = "2" barId = "skillBar6" />
      <SkillBar skillName = "Vite" maxProgres = "5" curProgres = "3" barId = "skillBar7" />
      <SkillBar skillName = "Git" maxProgres = "5" curProgres = "4" barId = "skillBar8" />
      <SkillBar skillName = "REST APIs" maxProgres = "5" curProgres = "3" barId = "skillBar9" />
      <SkillBar skillName = "C#" maxProgres = "5" curProgres = "3" barId = "skillBar10" />
      <SkillBar skillName = "Dart" maxProgres = "5" curProgres = "2" barId = "skillBar11" />
      <SkillBar skillName = "Pyithon" maxProgres = "5" curProgres = "1" barId = "skillBar12" />
      <SkillBar skillName = "GD Scripts" maxProgres = "5" curProgres = "1" barId = "skillBar13" />
    </div>
  );
}
export default Segment3

