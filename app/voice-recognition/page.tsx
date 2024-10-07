'use client'
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import FileUpload from './components/file-upload';
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group";
import { FaAws } from "react-icons/fa";
import { SiMicrosoftazure } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

const App: React.FC = () => {
  const handleDrop = (files: File[]) => {
    console.log('Uploaded files:', files);
  };

  return (
    <>
      <h2 className="text-3xl font-bold tracking-tight my-4">Voice Recognition</h2>
      <div className='flex-1 space-y-4'>

        <div className="grid gap-4 md:grid-cols-4 lg:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Select your audio files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload onDrop={handleDrop} />

              <div className="flex justify-center items-center space-x-4 mt-4">
                <ToggleGroup type="multiple">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <FaAws size={40}/>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <SiMicrosoftazure size={30}/>
                  </ToggleGroupItem>
                  <ToggleGroupItem value="underline" aria-label="Toggle underline">
                      <FaGoogle size={30}/>
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Select your audio files
              </CardTitle>
            </CardHeader>
            <CardContent>
              <FileUpload onDrop={handleDrop} />
              <div className='grid gap-4'></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default App;
