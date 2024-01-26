import React from 'react'
import Navbar from '../components/Navbar'
import Report from '../components/home/Report'
import Recent from '../components/home/Recent'
import Today from '../components/home/Today'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
 
  setTimeout(() => {
      setIsLoading(false);
  }, 2000);
  
  return (<>
    {isLoading ? (
      <div
          style={{
              width: "100px",
              margin: "auto",
          }}
      >
          <Loader />
      </div>
  ) :(
    <div>
        <Navbar />
        <Report />
        <h1 className='p-[1rem] text-[2rem]'>Recently Reported</h1>
        <Recent />
        <h1 className='p-[1rem] text-[2rem]'>Today's Reports</h1>
        <Today />
        <Footer />
      
    </div>)}
    </>
  )
}
