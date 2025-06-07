import {  } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Predict from './Predict'
import Header from './header'
import AboutUs from './AboutUs' 
function App() {

  return (
    <div className='font-inconsolata'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path='/predict' element={<Predict />}>
        </Route>
        <Route path='/aboutUs' element={<AboutUs />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
