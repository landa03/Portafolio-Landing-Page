import './Segment-1.scss'

function Segment1() {
  return (
    <section>
      <div className='segment-body'>
        <div className='segment-body-left'>
          <div className='text-1'>HI I AM</div>
          <div className='text-2'>David Omar Landa Aguirre</div>
          <div className='text-3' style={{textAlighn: "end"}}>Multimedia Engineer</div>
          <a className='send-e-mail-button'>Send me an e-mail</a>
        </div>
        <div className='segment-body-right'>
          <div className='blue-decal'></div>
          <div className='person-img-container'>
            <img className='person-img' src="./imgs/Landin't.png" alt="Portafolio author" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Segment1

