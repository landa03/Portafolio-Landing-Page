import './Project-card.scss'
import { useState } from 'react';



function ProjectCard() {
    const [projectName, setProjectName] = useState(0);

    return (
    <div className='front-end-project'>
        <div className='front-end-project-title'>
          <p>Project 1</p>
          <a href="#">
            <img src="" alt="" />
          </a>
        </div>
    </div>      
  );
}
export default ProjectCard