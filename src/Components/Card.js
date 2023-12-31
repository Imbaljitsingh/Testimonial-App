import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'


function Card (props) {

let data = props.reviews;


return (
    <div className='flex flex-col md:relative'>
        {/* Image Section  */}

        <div className='absolute top-[-7rem] z-[25] mx-auto'>
         <img src={data.image} alt="profile-picture" className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' />

          {/* Image Background Circle */}
          <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-1] left-[10px]'></div>
         </div>

        <div className='text-center mt-7'>
            {/* Name */}
            <p className='font-bold text-2xl capitalize'>{data.name}</p>
        </div>

        <div className='text-center'>
            {/* title */}
            <p className='text-violet-300 uppercase text-sm'>{data.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft  />
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {/* text  */}
            <p>{data.text}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5' >
            <FaQuoteRight />
        </div>

        
         
    </div>
)

}

export default Card;