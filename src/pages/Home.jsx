import React from 'react'
import Navbar from '../components/Navbar'
import Report from '../components/home/Report'
import Recent from '../components/home/Recent'
import Today from '../components/home/Today'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Navbar />
        <Report />
        <h1 className='p-[1rem] text-[2rem]'>Recently Reported</h1>
        <Recent />
        <h1 className='p-[1rem] text-[2rem]'>Today's Reports</h1>
        <Today />
        <Footer />
      
    </div>
  )
}
