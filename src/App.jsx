import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import HomePage from './Components/HomePage/HomePage'
import Products from "./Components/Products/Products";

function App() {

  return (
    <div className='site'>
    <HomePage/>
    <AboutUs/>
    <Products/>
    </div>
  )
}

export default App
