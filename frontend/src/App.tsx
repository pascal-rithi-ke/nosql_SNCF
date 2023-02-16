import { Route, Routes } from 'react-router-dom'
import { Analytic } from './page/Analytic'
import { Home } from './page/Home'

function App() {
   
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/analytics" element={<Analytic />} />
    </Routes>
  )
}

export default App
