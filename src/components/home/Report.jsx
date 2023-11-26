import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom'

export default function Report() {
    const navigate = useNavigate();
  return (
    <div className='flex p-[1rem] justify-between shadow'>
        <section className='h-[10rem] items-center'>
            <h1 className='text-[3rem] text-center p-[3rem]'>Witnessed an Accident?</h1>
        </section>
        <section>
            <button onClick={()=>navigate('/report/step1')} className='w-[10rem] h-[10rem] hover:cursor-pointer bg-red-700'>
                <AddIcon fontSize='large' color='' />
            </button>
            <p className='text-center'>Report</p>
        </section>
    </div>
  )
}
