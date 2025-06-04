import {  } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home'
import Predict from './Predict'
function App() {

  return (
    <div className='font-inconsolata'>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>

        <Route path='/predict' element={<Predict />}>
        </Route>
      </Routes>
    </div>
  )
}

export default App
