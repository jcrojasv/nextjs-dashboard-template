'use client'
import React from 'react';
import { useDropzone } from 'react-dropzone';

interface FileUploadProps {
  onDrop: (acceptedFiles: File[]) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onDrop }) => {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles) => {
      onDrop(acceptedFiles);
      console.log(acceptedFiles);
    }
  });

  return (
    <div className='flex justify-center items-center rounded-md border border-dashed p-4 text-center'>
        <div {...getRootProps()}>
        <input {...getInputProps()} />
            <span className='text-sm'>
              Drag and drop files here, or click to select files
            </span>
        </div>
    </div>
  );
};

export default FileUpload;
