import React from 'react'
import fire from '../../assets/fire.jpg'
import floods  from'../../assets/floods.jpg'

export default function Recent() {
    const reports =[
        {
            id:0,
            county:"county",
            image:`${fire}`,
            responded:'true'
        },{
            id:1,
            county:"county",
            image:`${fire}`,
            responded:'true'
        },{
            id:2,
            county:"county",
            image:`${fire}`,
            responded:'true'
        }
    ]
  return (
    <div className='flex justify-between p-[1rem] shadow'>
        {reports.map((item,key)=>{
            return(<div key={item.id} className='w-[25rem]'>
                <img className=' w-[100%]' src={item.image} alt='image'/>
                <p>County :{item.county}</p>
                <p>Responded : {item.responded}</p>

                </div>)
        })}
    </div>
  )
}
