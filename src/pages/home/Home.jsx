import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { images } from '../../constants';

export default function Home() {

  const [flipped, setFlipped] = useState(-1);

  return (
    <div className="min-h-screen bg-[#DAFFFB] py-24 px-10 text-[#001C30]">
      <h1 className="font-[algerian] text-[6rem]">CYREC</h1> 
      <p className="mb-20 font-[helvetica]">Cyber Reconnaissance</p>
      <div className="flex flex-wrap gap-10 justify-center items-center">
        {images.map((imgDetails, imgIndex) => (
          <ReactCardFlip key={imgIndex} isFlipped={imgIndex === flipped} flipDirection='horizontal'>
            <div className='relative hover:cursor-pointer'>
              <img className='w-72 h-56 md:w-96 md:h-72 bg-contain bg-center rounded-3xl pointer-events-none' src={imgDetails.img} />
              <div className='absolute inset-0 bg-gradient-to-b from-transparent to-white rounded-3xl opacity-0 hover:opacity-100'>
                <p onClick={() => setFlipped(imgIndex)} className='flex justify-center items-end w-full h-full'>{imgDetails.hoverText}</p>
              </div>
            </div>
            <div onClick={() => setFlipped(-1)} className='relative p-3 w-72 h-56 md:w-96 md:h-72 flex flex-col gap-3 justify-center items-center bg-[64CCC5] rounded-3xl hover:cursor-pointer'>
              <img className='absolute inset-0 w-72 h-56 md:w-96 md:h-72 bg-contain bg-center rounded-3xl pointer-events-none opacity-20 shadow-2xl shadow-black' src={imgDetails.img} />
              <h1 className='font-bold text-3xl'>{imgDetails.head}</h1>
              <p className='font-semibold'>{imgDetails.desc}</p>
            </div>
          </ReactCardFlip>
        ))}
      </div>
      <div className='mt-10 border-2 '>
        New Api
      </div>
    </div>
  )
}
