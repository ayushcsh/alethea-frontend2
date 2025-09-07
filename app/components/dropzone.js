'use client';
import { useRouter } from 'next/navigation';
import { Dropzone, DropzoneContent, DropzoneEmptyState } from '@/components/ui/shadcn-io/dropzone';
import { useEffect, useState } from 'react';
import { Loader2Icon } from "lucide-react"

import { Spinner } from '@/components/ui/shadcn-io/spinner';


import { Button } from "@/components/ui/button"



export default function PdfDropzone() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleDrop = async(acceptedFiles) => {
  console.log("Dropped files:", acceptedFiles); // ✅ add this
  const pdfFile = acceptedFiles[0];

  if (pdfFile.type !== "application/pdf") {
    alert("Only PDF files are allowed.");
    return;
  }
  setFiles(acceptedFiles);
  setLoading(true);
  console.log("Uploaded PDF:", pdfFile); // ✅ add this
  const pdfUrl = URL.createObjectURL(pdfFile);
  // You might be storing it in state for preview or upload
 
  if(pdfFile){
    const formdata = new FormData();
    formdata.append('pdf', pdfFile);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL_backend}/upload/pdf`, {
        method: 'POST',
        body: formdata
      });
      

      const result = await response.json();
      console.log('Upload result:', result);
      localStorage.setItem("pdfFilename", result.filename);
      if (response.ok) {
       setTimeout(() => {
          setLoading(false);
          router.push(`/chat?pdfUrl=${encodeURIComponent(result.pdfurl)}`); 
        }, 1000);
      }
      
      if (!response.ok) {
        setLoading(false);
        throw new Error(result.error || 'Failed to upload file');
      }
      
      
    } catch (error) {
      console.error('Upload error:', error);
      alert(`Upload failed: ${error.message}`);
    }
  }

  

};


  return (
    <div className="p-4">
      {loading ?(
        <div className='flex flex-col gap-2 justify-center items-center w-[54vw] h-[120px] rounded-[10px] border-[#ff6600]  hover:bg-black shadow-[0_0_20px_#ff6600] transition-all duration-300 mt-[30px]'>
          <Spinner size={40}/>
          <div className='text-[12px]'>Uploading PDF... Please wait.</div>
        </div>
      ):(
      <Dropzone
        accept={{ 'application/pdf': [] }}
        maxFiles={1}
        maxSize={1024 * 1024 * 10} // 10MB
        onDrop={handleDrop}
        onError={console.error}
        className= "border-[#ff6600]  hover:bg-black shadow-[0_0_20px_#ff6600] transition-all duration-300 mt-[30px] cursor-pointer"
      > 
        <DropzoneEmptyState />
        <DropzoneContent />
      </Dropzone>
)}
      {/* {files.length > 0 && (
        <div className="mt-4">
          <h4 className="font-bold">Uploaded PDF:</h4>
          <ul className="list-disc list-inside">
            {files.map((file) => (
              <li key={file.name}>{file.name}</li>
            ))}
          </ul>
        </div>
      )} */}
    </div>
  );
};

