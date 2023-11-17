import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import COVER1 from '../images/cover1.png'
import COVER2 from '../images/cover2.png'


function HeroScreen() {
  const data = [
    {
      image: "https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_1280.jpg",
      caption: "بيع الحواسيب"
      
    },
    {
      image: "https://cdn.pixabay.com/photo/2018/05/20/09/28/ecommerce-3415340_1280.jpg",
      caption: "بيع المنازل"
    },
    {
      image: "https://images.pexels.com/photos/7195232/pexels-photo-7195232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "بيع الاثاث المنزلي"
    },
  ]
  
  return (

/*<div class="px-6 py-12 text-center md:px-12 lg:text-left">
    <div class="w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div class="mt-12 lg:mt-0">
          <h1 class="mt-0 mb-16 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl text-[hsl(218,81%,95%)]">
             <span class="text-[hsl(218,81%,75%)]"> اختر ولايتك و قم ببيع  <br /> اي شئ لديك</span>
          </h1>
          <a class="mb-2 inline-block rounded bg-neutral-50 px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] md:mr-2 md:mb-0"
            data-te-ripple-init data-te-ripple-color="light" href="#!" role="button">تسوق الان </a>
          <a class="inline-block rounded px-12 pt-4 pb-3.5 text-lg font-medium uppercase leading-normal text-dark transition duration-150 ease-in-out hover:bg-pink-400 hover:text-white focus:text-black focus:outline-none focus:ring-0 active:text-neutral-300"
            data-te-ripple-init data-te-ripple-color="pink" href="#!" role="button">تسجيل الدخول</a>
        </div>
        <div class="mb-12 lg:mb-0">
          <img src="https://tecdn.b-cdn.net/img/new/ecommerce/horizontal/048.jpg"
            class="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="" />
        </div>
      </div>
    </div>
  </div>*/

<div class="bg-gray-50 flex items-center">
	<section class="bg-cover bg-center py-32 w-full" style={{"background-image": "url('')"}}>
    <Carousel data = {data}    time={2000}
            width="2250px"
            height="700px"
            radius="10px"
            slideNumber={true}
            captionPosition="bottom"
            captionSize ="60px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              fontSize:"250px",
              maxWidth: "2250px",
              maxHeight: "700px",
              marginTop: "-120px",
            }}>
	
      </Carousel>
	</section>
</div>



  
  )
}

export default HeroScreen
