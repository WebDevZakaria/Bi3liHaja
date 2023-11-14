import React from 'react'
import SHOP1 from '../images/shop1.png'
import SHOP4 from '../images/shop4.png'
import SHOP3 from '../images/shop3.png'
import SHOP5 from '../images/shop5.png'


function Market() {
  return (
    <section>

    <div className="relative mx-auto py-4 mt-8 w-full  max-w-7xl text-white">
    <img src={SHOP1} />

  </div>

  <div className="relative mx-auto py-4 mt-8 w-full  max-w-7xl text-white">

<img src={SHOP4} />

</div>

<div className='mx-[350px] flex flex-col lg:flex-row space-x-[200px] '>
    <div className='w-[500px]'>
    <img src={SHOP3} />
    </div>

    <div className='w-[500px] '>
    <img src={SHOP5} />
    </div>
    

</div>


  </section>
  )
}

export default Market
