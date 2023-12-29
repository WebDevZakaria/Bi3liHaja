import React,{useEffect} from 'react'

import {Link, useLocation,useParams,useNavigate} from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { addToCart ,removeFromCart} from '../actions/cartActions'

function AddToCard() {


  const { id } = useParams();

  const location = useLocation();

  let history = useNavigate();

  const dispatch = useDispatch()

  const cart = useSelector(state=>state.cart)

  const {cartItems} = cart
  
  useEffect(()=>{

      if(id){

          dispatch(addToCart(id))

      }

  },[dispatch,id])

  
const remveItemHandler = (id)=>{

dispatch(removeFromCart(id))

}

const checkoutHandler=()=>{

history('/login?redirect=shipping')

}

  return (


  <div class="h-screen bg-gray-100 pt-20">
    <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
    <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
      <div class="rounded-lg md:w-2/3">
        {cartItems.map(item =>(
 <div class="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
 <img src={item.image} alt="" class="w-full rounded-lg sm:w-40" />
 <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
   <div class="mt-5 sm:mt-0">
     <h2 class="text-lg font-bold text-gray-900">{item.name}</h2>
     <p class="mt-1 text-[15px] text-gray-700">{item.price} DA</p>
   </div>         
 </div>
 <div className=''>

     <button className='text-white bg-red-400 p-2 font-semibold rounded-lg' onClick={()=>{remveItemHandler(item.product)}}> حذف </button>

  </div>
</div>
        ))}
       

      </div>
      
      <div class="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">السعر</p>
          <p class="text-gray-700">2000 DA</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">توصيل</p>
          <p class="text-gray-700">200 DA</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">السعر الاجمالي</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">2200 DA </p>
            <p class="text-sm text-gray-700"></p>
          </div>
        </div>
        <Link to='/shipping'> <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">تأكيد الطلبية
        </button></Link>
      </div>
    </div>
  </div>
  )
}

export default AddToCard
