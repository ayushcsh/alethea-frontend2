'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

const mainpageanimation = () => {
  return (
    <div>
      <div className="w-[103%] p-2 flex flex-col justify-center items-center translate-x-[50px]">
          <h1 className="text-[55px] font-bebas font-bold word-wrap text-center ">Chat, <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-t from-black via-[#d03902] to-[#d03902]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >Summarize</motion.span> & Learn </h1>
          <h1 className="text-[30px] font-bebas font-bold word-wrap text-center">from Your PDFs — Powered by <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-t from-black via-[#d03902] to-[#d03902]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >AI</motion.span></h1>
          <p className="text-center text-[18px] mt-[20px]"><motion.span
          className="text-transparent bg-clip-text bg-gradient-to-t from-black via-[#d03902] to-[#d03902]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >Summarize</motion.span> key content, <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-t from-black via-[#d03902] to-[#d03902]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >Take notes</motion.span>, and <motion.span
          className="text-transparent bg-clip-text bg-gradient-to-t from-black via-[#d03902] to-[#d03902]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >Ask questions</motion.span> naturally</p>
          <p className="text-center text-[14px] mt-[10px] font-[Arial]">Transform your study materials into interactive learning experiences</p>
          <Link href = "/login">
          <button className="mt-[30px] bg-black text-white border-2 border-[#ff6600] shadow-glow-orange h-[60px]  font-bold w-[150px] rounded-3xl shadow-[0_0_20px_#ff6600] transition-all duration-300 cursor-pointer ">Get started</button>
          </Link>
        </div>
    </div>
  )
}

export default mainpageanimation
