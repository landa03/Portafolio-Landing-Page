import './Segment-2.scss'

import ProjectCard from "../public/Project-card"

function Segment2() {
  return (
    <section>
      <div className='segment-2-body'>
        <div className='segment-2-top-half'>
            <div className='segment-2-top-half-title'>Front End Experience</div>
                {/* TODO: cambiar a Project-cards */}
            <div className='front-end-projects'>



                {/* <div className='front-end-project'>
                    <div className='front-end-project-title'>
                      <p>Project 1</p>
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </div>
                </div> */}

                <ProjectCard projectTitle={"Project 1"}/>
                <ProjectCard />

               

            </div>
        </div>
        <div className='segment-2-bottom-half'>
            <div className='segment-2-bottom-half-title'>Software Development Experience</div>
            <div className='software-development-projects'>

                <div className='software-development-project'>
                  <div className='software-development-project-title'>
                      <p>Project 1</p>
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
}
export default Segment2
