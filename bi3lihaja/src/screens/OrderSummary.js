import React, { useEffect } from 'react'
import SUCCESS from '../images/success.jpg'
import { createOrder } from '../actions/orderActions'
import { Link, useNavigate} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
import { ORDER_CREATE_RESET } from '../constants/OrderConstants'
import { getUserDetails } from '../actions/userActions'


function OrderSummary() {

  const dispatch = useDispatch()

  let history = useNavigate();

  const orderCreate = useSelector(state=>state.orderCreate)

  const {order, error, success} = orderCreate

  const cart = useSelector(state=>state.cart)

  const { shippingAdress, payementMethod ,cartItems} = cart

  
  const userDetail = useSelector(state=>state.userDetails)

  const { user } = userDetail

  const userLogin = useSelector(state=>state.userLogin)

  const {userInfo} = userLogin

  cart.itemsPrice = cartItems.reduce((acc,item)=> Number(acc + item.price) , 0).toFixed(2)

  cart.shippingPrice =     (cart.itemsPrice > 2000 ? 0 :10).toFixed(2)

  cart.taxPrice = ((0.082) * cart.itemsPrice).toFixed(2)
  
  cart.totalPrice = (Number(cart.itemsPrice)+Number(cart.shippingPrice)+Number(cart.taxPrice)).toFixed(2)

  useEffect(()=>{

    if (!userInfo) {

      history('/login')

  }else {

      if (!user || !user.name || userInfo._id!== user._id)

      {

          dispatch(getUserDetails('profile'))
          
      }

  }


      if (success){

          history('/')
          dispatch({type:ORDER_CREATE_RESET})
          
      }

  },[success,history,order,dispatch,userInfo,user])

  const placeOrderHandler=()=>{

      dispatch(createOrder({

          orderItems:cartItems,
          shippingAdress:shippingAdress,
          itemsPrice:cart.itemsPrice,
          totalPrice:cart.totalPrice

      }))
      
      console.log(createOrder)

  }


  return (
    <div class="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">

  <div class="flex text-center space-y-8 flex-col">
    <h1 class="text-3xl dark:text-white lg:text-5xl font-semibold leading-7 lg:leading-9 text-gray-800">مرحلة تاكيد الطلبية</h1>
    {/* <img alt="..." src={SUCCESS} class="shadow-xl rounded-full h-auto align-middle border-none  m-16 ml-[400px] sm:ml-[240px] lg:ml-[600px] max-w-150-px" />*/}
    
    <button onClick={placeOrderHandler}
        class="flex flex-row items-center justify-center w-full text-2xl h-16 px-12 py-4 mb-8 text-white  font-semibold bg-green-300 leading-6 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-4 md:pl-8 md:pr-6 xl:pl-12 xl:pr-10   hover:shadow-lg hover:-translate-y-1">
        اضغط هنا لتاكيد طلبيتك
        <span class="ml-4">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" class="w-5 h-5 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
            </svg>
        </span>
    </button>


  </div>


  <div class="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div class="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div class="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p class="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">سلة المشتريات</p>
        {cartItems.map((item,index) =>(


<div class="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
<div class="pb-4 md:pb-8 w-full md:w-40">
  <img class="w-full hidden md:block" src={item.image} alt="dress" />
  <img class="w-full md:hidden" src={item.image} alt="dress" />
</div>
<div class="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
  <div class="w-full flex flex-col justify-start items-start space-y-8">
    <h3 class="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">{item.name}</h3>
    <div class="flex justify-start items-start flex-col space-y-2">
  
    </div>
  </div>

  <div class="flex justify-between space-x-8 items-start w-full">
    <p class="text-base dark:text-white xl:text-lg leading-6">{item.price} DA</p>
    <p class="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
    <p class="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">{item.price} DA</p>
  </div>

</div>
</div>
        ))}

      </div>
      <div class="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
        <div class="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
          <div class="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div class="flex justify-between w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">المبلغ </p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">2200 DA</p>
            </div>
            
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">التوصيل داخل ولايتك</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">00 DA </p>
            </div>
            <div class="flex justify-between items-center w-full">
              <p class="text-base dark:text-white leading-4 text-gray-800">التوصيل خارج ولايتك</p>
              <p class="text-base dark:text-gray-300 leading-4 text-gray-600">+500 DA </p>
            </div>
          </div>
          <div class="flex justify-between items-center w-full">
            <p class="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
            <p class="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600"> {cart.totalPrice}</p>
          </div>
        </div>
        <div class="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
          <div class="flex justify-between items-start w-full">
            <div class="flex justify-center items-center space-x-4">
             
              <div class="flex flex-col justify-start items-center">
                <p class="text-lg leading-6 dark:text-white font-semibold text-gray-800"><span class="font-normal">سيتم الاتصال بك من طرف البائع بعد ان تضغط على زر  "اضغط هنا لتاكيد طلبيتك" الموجود في الاعلى لمناقشة  المزيد من التفاصيل</span></p>
              </div>
            </div>
          </div>
          <div class="w-full flex justify-center items-center">
            <button class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">View Carrier Details</button>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <h3 class="text-xl dark:text-white font-semibold leading-5 text-gray-800">معلوماتك </h3>
      <div class="flex flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0">
        <div class="flex flex-col justify-start items-start flex-shrink-0">
          <div class="flex justify-center w-full md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
            <img src="https://i.ibb.co/5TSg7f6/Rectangle-18.png" alt="avatar" />
            <div class="flex justify-start items-start flex-col space-y-2">
              <p class="text-base dark:text-white font-semibold leading-4 text-left text-gray-800"> {user.name} {user.last_name}</p>
              <p class="text-sm dark:text-gray-300 leading-5 text-gray-600">10 Previous Orders</p>
            </div>
          </div>

          <div class="flex justify-center text-gray-800 dark:text-white md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 7L12 13L21 7" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p class="cursor-pointer text-sm leading-5 ">{user.email}</p>
          </div>
        </div>
        <div class="flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0">
          <div class="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row items-center md:items-start">
            <div class="flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8">
              <p class="text-base dark:text-white font-semibold leading-4 text-center md:text-left text-gray-800">معلومات التوصيل</p>
              <p class="w-48 lg:w-full dark:text-gray-300 xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600"> 
              الولاية:<br/>
              {shippingAdress.wilaya}<br/>

              <br/>
               الشارع: <br/>{shippingAdress.city} <br/><br/>

                رقم هاتفك:<br/>
                {shippingAdress.phone}<br/></p>
            </div>

          </div>
          <div class="flex w-full justify-center items-center md:justify-start md:items-start">
           <Link to = '/login?redirect=shipping'> <button class="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 px-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">تعديل معلومات التوصيل</button></Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default OrderSummary
