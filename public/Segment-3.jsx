import './Segment-3.scss'

import SkillBar from "../public/Skill-bar"
import SkillBrick from "../public/Skill-brick"

function Segment3() {
  return (
    <div className='segment-3-body' id='segment-3'>
      <div className='segment-title'>My Skills and Advantages</div>

      <SkillBar skillName = "HTML" maxProgres = "6" curProgres = "6" barId = "1" />
      <SkillBar skillName = "CSS" maxProgres = "6" curProgres = "6" barId = "2" />
      <SkillBar skillName = "JS" maxProgres = "6" curProgres = "5" barId = "3" />
      <SkillBar skillName = "TS" maxProgres = "6" curProgres = "1" barId = "4" />
      <SkillBar skillName = "React" maxProgres = "6" curProgres = "3" barId = "5" />
      <SkillBar skillName = "SASS" maxProgres = "6" curProgres = "3" barId = "6" />
      <SkillBar skillName = "Vite" maxProgres = "6" curProgres = "4" barId = "7" />
      <SkillBar skillName = "Git" maxProgres = "6" curProgres = "5" barId = "8" />
      <SkillBar skillName = "REST APIs" maxProgres = "6" curProgres = "4" barId = "9" />
      <SkillBar skillName = "C#" maxProgres = "6" curProgres = "3" barId = "10" />
      <SkillBar skillName = "Dart" maxProgres = "6" curProgres = "2" barId = "11" />
      <SkillBar skillName = "Pyithon" maxProgres = "6" curProgres = "1" barId = "12" />
      <SkillBar skillName = "GD Scripts" maxProgres = "6" curProgres = "1" barId = "13" />

      <div className='skillWall'>
        <SkillBrick skillName = "Figma" brickId = "1" />
        <SkillBrick skillName = "Penpot" brickId = "2" />
        <SkillBrick skillName = "Adobe After Effects" brickId = "3" />
        <SkillBrick skillName = "Adobe Illustrator" brickId = "4" />
        <SkillBrick skillName = "Adobe Premier Pro" brickId = "5" />
        <SkillBrick skillName = "Blender" brickId = "6" />
        <SkillBrick skillName = "Unreal Engine" brickId = "7" />
        <SkillBrick skillName = "Godot Engine" brickId = "8" />
        <SkillBrick skillName = "Time Managment" brickId = "9" />
        <SkillBrick skillName = "Conflict Resolution" brickId = "10" />
        <SkillBrick skillName = "Critical Thinking" brickId = "11" />
        <SkillBrick skillName = "Kanban" brickId = "12" />
        <SkillBrick skillName = "Scrum" brickId = "13" />
        <SkillBrick skillName = "Ágil" brickId = "14" />
        <SkillBrick skillName = "Responsive design" brickId = "15" />
        <SkillBrick skillName = "Client Communication" brickId = "16" />
        <SkillBrick skillName = "Collaboration" brickId = "17" />
        <SkillBrick skillName = "Team Leadership" brickId = "18" />
        <SkillBrick skillName = "Decition-Making" brickId = "19" />
        <SkillBrick skillName = "Communication Skills" brickId = "20" />
        <SkillBrick skillName = "Problem-Solving" brickId = "21" />
        <SkillBrick skillName = "Cross-functional Collaboration" brickId = "22" />
      </div>
    </div>
  );
}
export default Segment3

