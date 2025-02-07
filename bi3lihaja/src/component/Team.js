import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import SHOP6 from '../images/shop6.png'
import SHOP7 from '../images/shop7.png'
import SHOP8 from '../images/shop8.png'
import SHOP9 from '../images/shop9.png'

import CAR from '../images/car.png'
import COMPUTER from '../images/computer.png'

function Team() {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  return (
    <div class="container my-24 mx-auto md:px-6">
      <section class="mb-32 text-center">
        <h2 class="mb-32 text-3xl font-bold">
        تسوق حسب   <u class="text-primary dark:text-primary-400">الفئة</u>
        </h2>
        <Carousel
  swipeable={false}
  draggable={false}
  showDots={true}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  
  removeArrowOnDeviceType={["tablet", "mobile"]}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px"
  className='h-[400px]'
>
        
          <div class="mb-24 md:mb-0">
            <div
              class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex justify-center">
                <div class="flex justify-center -mt-[75px]">
                  <img src={SHOP6}
                    class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                </div>
              </div>
              <div class="p-6">
                <h5 class="mb-4 text-lg font-bold">الاجهزة الكهرومنزلية</h5>
                <p class="mb-6">Admin</p>
               
              </div>
            </div>
          </div>
    
          <div class="mb-24 md:mb-0">
            <div
              class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex justify-center">
                <div class="flex justify-center -mt-[75px]">
                  <img src={COMPUTER}
                    class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                </div>
              </div>
              <div class="p-6">
                <h5 class="mb-4 text-lg font-bold">الأجهزة الالكترونية</h5>
              
              </div>
            </div>
          </div>
    
          <div class="">
            <div
              class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex justify-center">
                <div class="flex justify-center -mt-[75px]">
                  <img src={SHOP9}
                    class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                </div>
              </div>
              <div class="p-6">
                <h5 class="mb-4 text-lg font-bold">بيع المنازل</h5>
                <p class="mb-6"></p>
                
              </div>
            </div>
          </div>

       
          <div class="">
            <div
              class="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div class="flex justify-center">
                <div class="flex justify-center -mt-[75px]">
                  <img src={CAR}
                    class="mx-auto rounded-full shadow-lg dark:shadow-black/20 w-[150px]" alt="Avatar" />
                </div>
              </div>
              <div class="p-6">
                <h5 class="mb-4 text-lg font-bold">بيع السيارات</h5>
                <p class="mb-6"></p>
                
              </div>
            </div>
          </div>

        </Carousel>;
      </section>
    </div>
  )
}

export default Team
