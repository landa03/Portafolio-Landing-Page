import './Project-card.scss'

let thisProjectLinck = '#'
let thisProjectImgPath = ''

// function ProjectCard({projectTitle, projectLinck, projectImgPath}) {
function ProjectCard({projectTitle = "Project title"}) {

    return (
    <div className='project-card'>
        <div className='project-card-title'>
          {/* <p>Project 1</p> */}
          <p>{projectTitle}</p>
          <a href={thisProjectLinck}>
            <img src={thisProjectImgPath} alt="" />
          </a>
        </div>
    </div>      
  );
}
export default ProjectCard