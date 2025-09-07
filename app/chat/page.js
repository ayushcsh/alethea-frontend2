'use client'
import React, { Suspense } from 'react'
import { useSearchParams } from 'next/navigation';
import Inputquery from '../components/inputquery';

function ChatContent() {
  const searchParams = useSearchParams();
  const pdfUrl = searchParams.get('pdfUrl');
  
  return (
    <div className='flex h-full w-full p-3 gap-3'>
      <div className='h-[95vh] w-[40%] bg-[#262626] shadow-md rounded-[10px]'>
        {pdfUrl && (
          <iframe
            src={pdfUrl}
            width="100%"
            height="600px"
            title="PDF Preview"
            className='h-[95vh] rounded-[10px]'
          />
        )}
      </div>
      <div className='h-[95vh] w-[60%] bg-black shadow-md rounded-[10px] flex justify-center items-center'>
        <Inputquery />
      </div>
    </div>
  )
}

export default function ChatPage() {
  return (
    <Suspense fallback={
      <div className="flex h-screen w-full items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
      </div>
    }>
      <ChatContent />
    </Suspense>
  )
}
