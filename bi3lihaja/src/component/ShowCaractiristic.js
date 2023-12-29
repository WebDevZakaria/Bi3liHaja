import React from 'react'
import { AcademicCapIcon, BadgeCheckIcon, TrendingUpIcon, UserGroupIcon } from '@heroicons/react/outline'
import SHOP6 from '../images/shop6.png'
import SHOP7 from '../images/shop7.png'
import SHOP8 from '../images/shop8.png'
import SHOP9 from '../images/shop9.png'
import SHOP3 from '../images/shop3.png'
import SHOP5 from '../images/shop5.png'


function ShowCaractiristic() {
  return (
    <div className="relative mx-auto py-12 w-full max-w-7xl h-[500px]  text-white">

    {/* :BACKGROUND IMAGE */}
    <img src={SHOP9} alt="" className="absolute top-0 left-0 w-full h-full " />

    {/* :MAIN CONTAINER */}
    <div className="relative w-full flex flex-col lg:flex-row justify-center items-center">

      {/* ::TITLE CONTAINER */}
      <div className="flex-shrink-0 mx-auto mb-10 px-4 text-center lg:text-left">
        {/* :::Title */}
        <h2 className="text-2xl sm:text-4xl lg:text-5xl text-white text-opacity-80 font-rubik tracking-wider space-y-3">
          <span className="block">بيع عدة <b className="text-white">انواع</b></span>
          <span className="block">من المنتجات <b className="text-white">بسهولة</b></span>
        </h2>
        {/* :::Bottom line */}
        <span className="mt-5 mx-auto lg:mx-0 w-32 h-1.5 block rounded-3xl bg-white" />
      </div>

      {/* ::FEATURES CONTAINER */}
      <dl className="flex-grow-0 px-4 grid grid-cols-4 gap-4">

        {/* :::Feature 1 -> Expertise */}
        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 sm:border-blue-300 lg:border-gray-100 bg-black bg-opacity-80 text-center">
          {/* Icon */}
          
           <img src = {SHOP6} />
          
          {/* Feature name */}
          
        </div>

        {/* :::Feature 2 -> Leadership */}
        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 sm:border-gray-100 lg:border-blue-300 bg-black bg-opacity-80 text-center">
        <img src = {SHOP7} />
          
        </div>

        {/* :::Feature 3 -> Careers */}
        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-gray-100 md:border-blue-300 bg-black bg-opacity-80 text-center">
        <img src = {SHOP8} />
        </div>

        {/* :::Feature 4 -> Partnership */}
        <div className="col-span-full sm:col-span-2 md:col-span-1 lg:col-span-2 mx-auto py-5 px-2.5 w-full max-w-xs flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-blue-300 md:border-gray-100 bg-black bg-opacity-80 text-center">
          {/* Icon */}
          <img src = {SHOP5} />
          
        </div>

      </dl>


    </div>
  </div>
  )
}

export default ShowCaractiristic
