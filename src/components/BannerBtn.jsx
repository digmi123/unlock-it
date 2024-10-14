import React from 'react';
import { Lock, Layers, Key } from "lucide-react"; // Importing icons from Lucide
import { Button } from "@/components/ui/button"; // Shadcn UI Button component

function BannerBtn() {
  const services = [
    { text: "Emergency & Lockout", icon: <Lock className="mr-2 h-6 w-6 text-primary" /> },
    { text: "Lock Change & Repair", icon: <Layers className="mr-2 h-6 w-6 text-primary" /> },
    { text: "Key Services & Rekeying", icon: <Key className="mr-2 h-6 w-6 text-primary" /> },
  ];

  return (
    <div className='bg-primary flex justify-center items-center p-10'>
      <div className="">
        <h3 className='mb-8 text-2xl font-extrabold leading-none tracking-tight text-white'>
          OUR SERVICES INCLUDE:
        </h3>
        <div className="flex space-x-8">
          {services.map((item, index) => (
            <Button key={index} className="bg-gray-900 text-white hover:bg-gray-800 py-4 px-6 rounded-md shadow-md">
              {item.icon}
              {item.text}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BannerBtn;