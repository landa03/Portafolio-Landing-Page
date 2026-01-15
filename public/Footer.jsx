import './Footer.scss'



function Footer() {
  return (
    <>
       <div className='footer-body'>
        <a href="" id='footer-link-location' className='footer-link'>
            <img src="./imgs/icons/solar_map-point-outline.png" alt="" className='footer-link-icon'/>
            <div className='footer-link-text'>Chihuahua, MX.</div>
        </a>
        <a href="" id='footer-link-e-mail' className='footer-link'>
            <img src="./imgs/icons/solar_letter-outline.png" alt="" className='footer-link-icon'/>
            <div className='footer-link-text'>omarlandita03@gmail.com</div>
        </a>
        <a href="" id='footer-link-phone-number' className='footer-link'>
            <img src="./imgs/icons/solar_phone-outline.png" alt="" className='footer-link-icon'/>
            <div className='footer-link-text'>+52 (614) 126 41 89</div>
        </a>
        <a href="" id='footer-link-linkedin' className='footer-link'>
            <img src="./imgs/icons/mdi_linkedin.png" alt="" className='footer-link-icon'/>
            <div className='footer-link-text'>LinkedIn</div>
        </a>
       </div>
    </>
  );
}
export default Footer

