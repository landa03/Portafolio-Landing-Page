import './Segment-4.scss'



function Segment4() {
  return (
    <>
        <div className='segment-4-title'>About me</div>
        <div className='segment-4-body'>
          <div className='segment-body-left'>
            <div className='segment-body-left-content'>I’m a front-end developer with 2 years of experience building responsive and engaging web applications. I have a strong eye for UI design and a growing passion for 3D and audio integration. I also have experience working on video game projects, bringing creativity and technical skills together. Self-motivated and team-oriented, I love learning new tools and crafting digital experiences that are fun, functional, and visually compelling.</div>
            {/* <div className='text-1'>HI I AM</div>
            <div className='text-2'>David Omar Landa Aguirre</div>
            <div className='text-3' style={{textAlighn: "end"}}>Multimedia Engineer</div>
            <a className='send-e-mail-button'>Send me an e-mail</a> */}
          </div>
          <div className='segment-body-right'>
            <div className='blue-decal'></div>
            <div className='person-img-container'>
              <img className='person-img' src="./imgs/Landin't.png" alt="Portafolio author" />
            </div>
          </div>
        </div>
    </>
  );
}
export default Segment4

