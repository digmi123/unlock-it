import React from 'react'
import guaranteeImage from '../../assets/Gur.png'
import { CallUsButton } from '@/main/common'
function GuaranteeBanner() {
  return (
    <div className="bg-black py-10 px-5">
    <div className="flex justify-center  md:flex-row items-center m-auto max-w-7xl mx-auto">
      <div className="mb-4 md:mb-0">
        <img className='h-80' src={guaranteeImage} alt="Guarantee Illustration" />
      </div>
      <div className="text-white w-1/2 text-start md:text-left m-6 p-6 md:ml-6">
        <p className="text-2xl font-semibold pb-6">Our Guarantee</p>
        <h2 className="text-5xl font-bold pb-6">Top Quality Service & Cheapest Rate</h2>
      <CallUsButton/>
      </div>
    </div>
  </div>
  )
}

export default GuaranteeBanner