import React,{useState, useEffect } from 'react'
import LIVRER from '../images/livrer.png'
import {useSelector,useDispatch} from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/OrderConstants'
import { saveShippingAdress } from '../actions/cartActions'

function ShippingScreen() {

    const dispatch = useDispatch()

    let history = useNavigate();


    const  [wilaya,setWilaya] = useState('')
    const  [phone,setPhone] = useState('')
    const  [city,setCity] = useState('')


    const cart =  useSelector(state=>state.cart)

    const { shippingAdress,cartItems } = cart


    cart.itemsPrice = cart.cartItems.reduce((acc,item) => acc + item.price ,0)

    //cart.shippingPrice =     (cart.itemsPrice > 2000 ? 0 :10).toFixed(2)

    //cart.taxPrice = ((0.082) * cart.itemsPrice).toFixed(2)


    cart.totalPrice = (Number(cart.itemsPrice))

   

    useEffect(()=>{

        if (shippingAdress) {
      
          setWilaya(shippingAdress.wilaya)
          setPhone(shippingAdress.phone)
          setCity(shippingAdress.city)
          
        }
         
      },[shippingAdress])

          const submitHandler=(e)=>{
      
            e.preventDefault()
            
            dispatch(saveShippingAdress({wilaya,phone,city}))
      
            history('/success')
      
          }


  return (

    <div class="min-w-screen min-h-screen bg-gray-50 py-5">
    <div class="px-5">
    <Link to = '/card'><button
  type="button"
  class="inline-block rounded-full bg-red-600 px-8 pb-4 pt-4 text-[16px] font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#dc4c64] transition duration-150 ease-in-out hover:bg-danger-600 hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:bg-danger-600 focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] focus:outline-none focus:ring-0 active:bg-danger-700 active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.3),0_4px_18px_0_rgba(220,76,100,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(220,76,100,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(220,76,100,0.2),0_4px_18px_0_rgba(220,76,100,0.1)]">
  رجوع
</button>
</Link>

        
    <div className="relative mx-auto pb-4 mt-0 w-full  max-w-[1200px]  text-white">
    <img src={LIVRER} height='1120px' />

  </div>
        <div class="mb-2">
            <h1 class="text-3xl md:text-5xl font-bold text-gray-600 text-center">Page De livraison</h1>
        </div>
        
    </div>
    <div class="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
        <div class="w-full">
            <div class="-mx-3 md:flex items-start">
                <div class="px-3 md:w-7/12 lg:pr-10">
                    <div class="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                        {cartItems.map(item =>(
                            <div class="w-full flex items-center">
                            <div class="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                <img src={item.image} alt="" />
                            </div>
                            <div class="flex-grow pl-3">
                                <h6 class="font-semibold uppercase text-gray-600">{item.name}</h6>
                                <p class="text-gray-400">x 1</p>
                            </div>
                            <div>
                                <span class="font-semibold text-gray-600 text-xl">DA {item.price}</span><span class="font-semibold text-gray-600 text-sm"></span>
                            </div>
                        </div>

                          ))}
                        
                    </div>
                   
                    <div class="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                        <div class="w-full flex mb-3 items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">السعر</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">دج  {cart.totalPrice} </span>
                            </div>
                        </div>
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600"> سعر التوصيل داخل ولايتك </span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">00 دج</span>
                            </div>
                        </div>
                        <div class="w-full flex items-center pt-2">
                            <div class="flex-grow">
                                <span class="text-gray-600"> سعر التوصيل خارج ولايتك </span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold">500 دج</span>
                            </div>
                        </div>
                    </div>
                    <div class="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                        <div class="w-full flex items-center">
                            <div class="flex-grow">
                                <span class="text-gray-600">السعر الاجمالي</span>
                            </div>
                            <div class="pl-3">
                                <span class="font-semibold text-gray-400 text-sm">AUD</span> <span class="font-semibold">$210.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-3 md:w-5/12">
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                      
                        <div class="w-full flex items-center">
                            <div class="w-48">
                                <span class="text-gray-600 font-semibold">adresse de livraison</span>
                            </div>
                           
                        </div>
                    </div>
                    <div class="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                        <div class="w-full p-3 border-b border-gray-200">
                          
                            <form onSubmit={submitHandler}>
                              
                                
                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">رقم الهاتف</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="ادخل رقم الهاتف" type="text"
                                        
                                        value = {phone ? phone :  ''} onChange={(e)=>setPhone(e.target.value)}
                                        />
                                    </div>
                                </div>




                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">الولاية</label>
                                    <div>
                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="ادخل ولايتك" type="text"
                                        value = {wilaya ? wilaya :  ''} onChange={(e)=>setWilaya(e.target.value)}
                                        />

                                    </div>
                                </div>

                                

                                <div class="mb-3">
                                    <label class="text-gray-600 font-semibold text-sm mb-2 ml-1">العنوان  الشخصي</label>
                                    <div>

                                        <input class="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="ادخل عنوانك الشخصي" type="text"
                                        value = {city ? city :  ''} onChange={(e)=>setCity(e.target.value)}
                                        />
                                        
                                    </div>

                                </div>
                                <div>
                        <button class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i class="mdi mdi-lock-outline mr-1"></i>تأكيد</button>
                    </div>
                            </form>
                        </div>
                       
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
    
</div>
    
  )
}

export default ShippingScreen
