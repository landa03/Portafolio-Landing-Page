import './Segment-2.scss'

import ProjectCard from "../public/Project-card"

function Segment2() {
  return (
    <section>
      <div className='segment-2-body'>
        <div className='segment-2-half'>
            <div className='segment-2-half-title'>Front End Experience</div>
                {/* TODO: cambiar a Project-cards */}
            <div className='segment-2-projects project-card-holder'>



                {/* <div className='front-end-project'>
                    <div className='front-end-project-title'>
                      <p>Project 1</p>
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </div>
                </div> */}

                <ProjectCard projectTitle={"Place holder 1"} cardId={"1"}/>
                <ProjectCard projectTitle={"Place holder 2"} cardId={"2"}/>
                <ProjectCard projectTitle={"Place holder 3"} cardId={"3"}/>
                <ProjectCard projectTitle={"Place holder 4"} cardId={"4"}/>
                <ProjectCard projectTitle={"Place holder 5"} cardId={"5"}/>

               

            </div>
        </div>
        <div className='segment-2-half'>
            <div className='segment-2-half-title'>Software Development Experience</div>
            <div className='segment-2-projects project-card-holder'>
              <ProjectCard projectTitle={"Place holder 1"} cardId={"6"}/>
              <ProjectCard projectTitle={"Place holder 2"} cardId={"7"}/>
              <ProjectCard projectTitle={"Place holder 3"} cardId={"8"}/>

            </div>
        </div>
      </div>
    </section>
  );
}
export default Segment2
