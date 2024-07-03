import React from 'react'

const Footer = () => {
  return (
    <footer className='relative'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0000000" fillOpacity="1" d="M0,192L1440,96L1440,320L0,320Z"></path></svg>

      <div className='info absolute right-1/2 top-1/2 text-white sm:right-[40%] sm:top-[40%]'>
        <h1>Developed by</h1>
        <p>Kreeeshaa</p>
      </div>
    </footer>
  )
}

export default Footer