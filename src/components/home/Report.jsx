import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default function Report() {
    const navigate = useNavigate();
    const text = [{
        id:0,
        title:'Witnessed an Accident?'
    },
    {
        id:1,
        title:'Floods Crisis?'
    },
    {
        id:2,
        title:'Need a rescue team from Red Cross?'
    },
    {
        id:3,
        title:'Report to Red Cross for immediate action to be taken'
    }]
    const interval = 3000;
  return (
    <div className='flex p-[1rem] justify-between shadow'>
        <section className='h-[10rem] items-center bg-sky-500 w-[87%]'>
        <Carousel autoPlay infiniteLoop interval={interval} showArrows={false} showStatus={false} showThumbs={false} >
           {text.map((item,key)=>{
           return(<div key={item.id}> 
            <h1 className='text-[2rem] text-center p-[3rem]'>{item.title}</h1>
           </div>)} )}
            </Carousel>
        </section>
        <section>
            <button onClick={()=>navigate('/report/step1')} className='w-[10rem] h-[10rem] text-white hover:cursor-pointer bg-red-700'>
                <AddIcon  sx={{ fontSize: 140 }}  />
                <p className='mt-[-1rem] '>Report</p>
            </button>
           
        </section>
    </div>
  )
}
