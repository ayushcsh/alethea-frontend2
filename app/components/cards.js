'use client'

import { motion } from 'framer-motion';
import React from 'react'
import Image from 'next/image'

const Cards = ({tittle ,description, image}) => {
    return (
        <>
            <div className='mt-[120px]'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ amount: 0.5 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    
                >   

                    <div className='flex w-full h-[60vh]'>
                    <div className="text-center px-4  w-[40vw] ml-[120px] h-[60vh] flex flex-col justify-center">
                        <h1 className="text-[48px] font-bold text-white">
                            {tittle}
                        </h1>
                        <p className="text-[18px] text-gray-600 mt-4 max-w-[500px] mx-auto">
                            {description}
                        </p>
                    </div>
                    <div className='relative'>
                    <div className="w-[35vw] ml-[120px] h-[48vh] mt-[50px] absolute inset-0 bg-[#ff6600] blur-md"></div>
                    <div className='relative w-[35vw] ml-[120px] h-[48vh] mt-[50px] rounded-[10px]'>
                        <Image 
                          className='rounded-2xl object-cover' 
                          src={image} 
                          alt="Card image" 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                    </div>
                    </div>
                </motion.div>
                </div>
                
            
        </>
    )
}

export default Cards
