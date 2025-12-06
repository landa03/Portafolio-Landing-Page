import './Segment-3.scss'

import SkillBar from "../public/Skill-bar"

function Segment3() {
  return (
    <div className='segment-3-body'>
      <div className='segment-title'>My Skills and Advantages</div>
      <SkillBar skillName = "HTML" maxProgres = "5" curProgres = "5" />
      <SkillBar skillName = "CSS" maxProgres = "5" curProgres = "5" />
      <SkillBar skillName = "JS" maxProgres = "5" curProgres = "4" />
      <SkillBar skillName = "TS" maxProgres = "5" curProgres = "1" />
      <SkillBar skillName = "React" maxProgres = "5" curProgres = "2" />
      <SkillBar skillName = "SASS" maxProgres = "5" curProgres = "2" />
      <SkillBar skillName = "Vite" maxProgres = "5" curProgres = "3" />
      <SkillBar skillName = "Git" maxProgres = "5" curProgres = "4" />
      <SkillBar skillName = "REST APIs" maxProgres = "5" curProgres = "3" />
      <SkillBar skillName = "C#" maxProgres = "5" curProgres = "3" />
      <SkillBar skillName = "Dart" maxProgres = "5" curProgres = "2" />
      <SkillBar skillName = "Pyithon" maxProgres = "5" curProgres = "1" />
      <SkillBar skillName = "GD Scripts" maxProgres = "5" curProgres = "1" />
    </div>
  );
}
export default Segment3

