import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import HomePage from './Components/HomePage/HomePage'
import Products from "./Components/Products/Products";
import Team from "./Components/Team/Team";
import WhyTrust from './Components/WhyTrust/WhyTrust';
import Contact from './Components/Contact/Contact';
function App() {

  return (
    <div className='site'>
    <HomePage/>
    <AboutUs/>
    <Products/>
    <Team/>
    <WhyTrust/>
    <Contact/>
    </div>
  )
}

export default App
