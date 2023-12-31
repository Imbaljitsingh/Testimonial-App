import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

function Testimonial(props) {

let reviews = props.reviews;

// const [data, setdata] = useState(reviews)

const [index, setindex] = useState(0);
//left button handler 

function leftButtonHandler() {
    if(index - 1 < 0 ) {
        setindex(reviews.length - 1);
    }
 
    else {
        setindex(index - 1);
    }
}

//right button handler 

function rightButtonHandler() {
    if(index + 1 >= reviews.length) {
        setindex(0);
    }

    else {
        setindex(index + 1);
    }
}

//random button handler 

function randomButtonHandler() {

    let randomNum =  Math.floor(Math.random() * reviews.length);
    setindex(randomNum);
    console.log(index);
}




 return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-200 rounded-md hover:shadow-lg'>



        <Card reviews={reviews[index]}>
        </Card>

        <div className='flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center'>

            {/* left button */}
            <button className='cursor-pointer hover:text-violet-500' onClick={leftButtonHandler}><FiChevronLeft /></button>

            {/* right button  */}
            <button className='cursor-pointer hover:text-violet-500' onClick={rightButtonHandler}><FiChevronRight /></button>
                
        </div>

        <div className='mt-7'>
        <button onClick={randomButtonHandler}className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Suprise Me</button>
        </div>

    </div>
 )


}


export default Testimonial;