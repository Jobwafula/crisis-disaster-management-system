import React from 'react'

export default function Step2() {
  return (
    <div className='h-screen flex items-center justify-center' >
        <form action="" className='space-y-[1rem]'>
            <div>
            <label>Phone Number</label>
        <input  className='border w-[19rem] p-3' type='text'  required /> 
            </div>
            
        <div className='flex w-[100%] justify-between'>
        <label className='p-3'>Location</label>
        <input className='border w-[19rem] p-3' type='text' required />
        </div>
       <button  className='bg-red-700 w-[100%] text-white p-3' >Report</button>
        </form>

        
    </div>
  )
}
