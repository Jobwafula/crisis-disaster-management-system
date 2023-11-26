import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Step1() {

    const navigate = useNavigate();
  return (
    <div className='h-screen flex items-center justify-center' >
        <form action="" className='space-y-[1rem]'>
            <div>
            <label>Attachment</label>
        <input  type='file'  /> 
            </div>
            
        <div className='flex w-[100%] justify-between'>
        <label className='p-3'>Report</label>
        <input className='border w-[19rem] p-3' type='text' />
        </div>
       <button onClick={()=>navigate('/report/step2')} className='bg-red-700 w-[100%] text-white p-3' >Next</button>
        </form>

        
    </div>
  )
}
