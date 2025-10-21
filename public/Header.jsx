import './Header.scss'

function Header() {
  return (
    <section>

      <div className='header'>
        <div className='header-person-name'><p>David</p></div>
        <div className='header-buttons'>
            <a className='header-button-1' href='#'><div>Contact</div></a>
            <a className='header-button-2' href='#'> Experience</a>
            <a className='header-button-3' href='#'>Skills</a>
            <a className='header-button-4' href='#'>About me</a>
        </div>
        <div className="colum-spacer"></div>
      </div>
    </section>
  );
}
export default Header

