
import React,{useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation ,useNavigate} from 'react-router-dom'
import { login } from '../actions/userActions'


function LoginScreen() {

  const location =  useLocation()

  let history = useNavigate();

  const  [email,setEmail] = useState('')

  const  [password,setPassword] = useState('')

  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1]: '/'

  const userLogin = useSelector(state=>state.userLogin)

  const { userInfo } = userLogin

  useEffect(()=>{

      if (userInfo) {

          history(redirect)

      }
      
  },[history,userInfo,redirect])


  const submitHandler=(e)=>{

      e.preventDefault()

      dispatch(login(email,password))
      
  }

  return (
   
    <section class="flex flex-col md:flex-row h-screen items-center mb-28">
    
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://cdn.pixabay.com/photo/2019/10/10/08/11/shopping-4538982_1280.jpg" alt="" class="w-full h-full object-cover" />
      </div>
    
      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center">
    
        <div class="w-full h-100">
    
    
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">تسجيل الدخول </h1>
    
          <form class="mt-6"  method="POST" onSubmit = {submitHandler}>
            <div>
              <label class="block text-gray-700">الايميل</label>
              <input type="email" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required
              value = {email} onChange ={(e)=>setEmail(e.target.value)} 
              />

            </div>

            <div class="mt-4">
              <label class="block text-gray-700">كلمة السر</label>
              <input type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required  value = {password} onChange ={(e)=>setPassword(e.target.value)} />
            </div>
            
            <div class="text-right mt-2">
              <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">نسيت كلمة السر?</a>
            </div>
    
            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6">Log In</button>
          </form>
    
          <hr class="my-6 border-gray-300 w-full" />
    
          <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                <div class="flex items-center justify-center">
                
                <span class="ml-4">
                تسجيل الدخول بحساب غوغل
                </span>
                </div>
              </button>
    
          <p class="mt-8">ليس لديك حساب? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">انشاء حساب جديد 
                  </a></p>
    
    
        </div>
      </div>
    
    </section>
  )
}

export default LoginScreen
