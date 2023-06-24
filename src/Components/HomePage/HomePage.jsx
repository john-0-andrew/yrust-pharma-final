/* eslint-disable react/no-unescaped-entities */
import './HomePage.css'
import logo from '../../assets/pics/trust-logo.png'
import NavBar from '../NavBar/NavBar';
function HomePage() {
  return (
    <div className=" container" id="home">
        <NavBar/>
      {/* <img className='logo' src={logo} alt="" /> */}
      <div className="text-box">
        <p>slogan</p>
        <h1>Slogan</h1>
        <h3>SLOGAN SLOGAN SLOGAN</h3>
      </div>
    </div>
  );
}

export default HomePage
