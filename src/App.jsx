import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import HomePage from './Components/HomePage/HomePage'
import Products from "./Components/Products/Products";
import Products3 from "./Components/Products3/Products3";
import Team from "./Components/Team/Team";
function App() {

  return (
    <div className='site'>
    <HomePage/>
    <AboutUs/>
    {/* <Products/> */}
    {/* <Products2/> */}
    <Products3/>
    <Team/>
    </div>
  )
}

export default App
