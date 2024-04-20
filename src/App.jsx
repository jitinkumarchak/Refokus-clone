import React from 'react'
import { Navbar } from './Components/Navbar'
import Work from './Components/Work'
import Stripes from './Components/Stripes'
import Products from './Components/Products'


function App() {
  return (
    <div className='w-full h-full bg-black  font-["satoshi"] text-white'>
    <Navbar/>
    <Work/>
    <Stripes/>
    <Products/>
      </div>
  )
}

export default App