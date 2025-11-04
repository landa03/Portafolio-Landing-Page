import './Project-card.scss'

let thisProjectTitle = ''
let thisProjectLinck = '#'
let thisProjectImgPath = ''

function ProjectCard( {projectTitle, projectLinck, projectImgPath} ) {

  if (projectTitle == '') {
      thisProjectTitle = "Project title"
    }else{
        thisProjectTitle = projectTitle
  }
  
  //   thisProjectTitle = projectTitle
  //   thisProjectLinck = projectLinck
  //   thisProjectImgPath = projectImgPath

    return (
    <div className='front-end-project'>
        <div className='front-end-project-title'>
          {/* <p>Project 1</p> */}
          <p>{thisProjectTitle}</p>
          <a href={thisProjectLinck}>
            <img src={thisProjectImgPath} alt="" />
          </a>
        </div>
    </div>      
  );
}
export default ProjectCard