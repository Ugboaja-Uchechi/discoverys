import React from 'react'
import Navbar from './Navbar'
import Services from './Services'
import About from './About'

const Home = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className='background'>
        <main className='main'>
          <h1>Navigating uncertainties, securing futures: Your trusted risk and audit partner</h1>
        </main>

      </div>
      <About />
      <Services />
    </>
  )
}

export default Home