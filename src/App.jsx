import React from 'react'
import { Navbar, Hero, Uses, Works, Industries, Footer} from './Components'
import './App.css'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Uses />
      <Works />
      <Industries />
      <Footer />
    </div>
  )
}

export default App