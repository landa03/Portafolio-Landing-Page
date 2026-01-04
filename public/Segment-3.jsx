import './Segment-3.scss'

import SkillBar from "../public/Skill-bar"

function Segment3() {
  return (
    <div className='segment-3-body'>
      <div className='segment-title'>My Skills and Advantages</div>
      <SkillBar skillName = "HTML" maxProgres = "5" curProgres = "5" barId = "1" />
      <SkillBar skillName = "CSS" maxProgres = "5" curProgres = "5" barId = "2" />
      <SkillBar skillName = "JS" maxProgres = "5" curProgres = "4" barId = "3" />
      <SkillBar skillName = "TS" maxProgres = "5" curProgres = "1" barId = "4" />
      <SkillBar skillName = "React" maxProgres = "5" curProgres = "2" barId = "5" />
      <SkillBar skillName = "SASS" maxProgres = "5" curProgres = "2" barId = "6" />
      <SkillBar skillName = "Vite" maxProgres = "5" curProgres = "3" barId = "7" />
      <SkillBar skillName = "Git" maxProgres = "5" curProgres = "4" barId = "8" />
      <SkillBar skillName = "REST APIs" maxProgres = "5" curProgres = "3" barId = "9" />
      <SkillBar skillName = "C#" maxProgres = "5" curProgres = "3" barId = "10" />
      <SkillBar skillName = "Dart" maxProgres = "5" curProgres = "2" barId = "11" />
      <SkillBar skillName = "Pyithon" maxProgres = "5" curProgres = "1" barId = "12" />
      <SkillBar skillName = "GD Scripts" maxProgres = "5" curProgres = "1" barId = "13" />
    </div>
  );
}
export default Segment3

