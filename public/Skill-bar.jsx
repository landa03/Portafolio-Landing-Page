import './Skill-bar.scss'


function SkillBar({skillName = "Skill", maxProgres = "1", curProgres = "0"}) {

  // 100% - sbpb (?)
  // mP - cP
  // (cP/mP)*100 = sbpb
    return (
      <div className='skill-bar'>
        <div className='skill-bar-progres-bar'>
          <div className='skill-name'></div>
        </div>
        <div className='skill-bar-progres-text'></div>
      </div>
    );
}
export default ProjectCard