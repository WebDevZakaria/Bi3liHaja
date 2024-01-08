import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'
import { useLocation ,useNavigate} from 'react-router-dom'
import { register } from '../actions/userActions';



function RegisterScreen() {

  const location =  useLocation()
  let history = useNavigate();

  const  [name,setName] = useState('')
  const  [lastname,setLastname] = useState('')
  const  [email,setEmail] = useState('')
  const [phonenumber, setPhonenumber] = useState('');
  const [wilaya, setWilaya] = useState('');

  const  [password,setPassword] = useState('')
  const  [confirmPassword,setConfirmPassword] = useState('')


  const dispatch = useDispatch()

  const redirect = location.search ? location.search.split('=')[1]: '/'

  const userRegister = useSelector(state=>state.userRegister)

  const { userInfo } = userRegister

  useEffect(()=>{

      if (userInfo) {

          history(redirect)

      }

  },[history,userInfo,redirect])



  const handleWilayaChange = (event) => {
    setWilaya(event.target.value);
  };


  const submitHandler=(e)=>{

      e.preventDefault()

      if(password !== confirmPassword){

          alert(' لديك خطا عند تاكيد الباسوورد')

      }

      else 

      {

          dispatch(register(name,lastname,email,phonenumber,wilaya,password))

      }

  }



  return (
  
    <section class="flex flex-col md:flex-row h-screen items-center mb-28">
    
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://cdn.pixabay.com/photo/2019/10/10/08/11/shopping-4538982_1280.jpg" alt="" class="w-full h-full object-cover" />
      </div>
    
      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center">
    
        <div class="w-full h-100">
    
    
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">انشاء حساب جديد </h1>
    
          <form class="mt-6"  method="POST" onSubmit = {submitHandler}>
            <div>
              <label class="block text-gray-700">اللقب</label>
              <input type="text" name="" id="" placeholder="ادخل لقبك" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required
               value={lastname}    onChange ={(e)=>setLastname(e.target.value)}
               />
            </div>
    
            <div class="mt-4">
              <label class="block text-gray-700"> الاسم</label>
              <input type="text"  id="" placeholder="ادخل اسمك" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required  value={name} onChange ={(e)=>setName(e.target.value)} />
            </div>
            
            <div class="mt-4">
              <label class="block text-gray-700"> الايميل</label>
              <input type="email"  id="" placeholder="ادخل ايميلك" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required value={email} onChange ={(e)=>setEmail(e.target.value)}  />
            </div>
 
            <div class="mt-4">
              <label class="block text-gray-700"> رقم الهاتف</label>
           
            
              <input type="text"  id="" placeholder="ادخل رقم الهاتف" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required  value={phonenumber} onChange ={(e)=>setPhonenumber(e.target.value)} />    
    </div>
           
                
       
            <div class="mt-4">
              <label class="block text-gray-700">ولايتك</label>
              <select  class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none"
                    value={wilaya} onChange={handleWilayaChange}
                    >
    <option value="Wilaya_dAdrar">Wilaya d'Adrar </option>
    <option value="Wilaya_Chlef">Wilaya de Chlef</option>
    <option value="Wilaya_Laghouat">Wilaya de Laghouat</option>
    <option value="Wilaya_Bouaghi">Wilaya d'Oum El Bouaghi</option>
    <option value="Wilaya_Batna">Wilaya de Batna</option>
    <option value="Wilaya_Béjaïa">Wilaya de Béjaïa</option>
    <option value="	Wilaya_Biskra">	Wilaya de Biskra *</option>
    <option value="Wilaya_Béchar">Wilaya de Béchar *</option>
    <option value="Wilaya_Blida">Wilaya de Blida</option>
    <option value="Wilaya_Bouira">Wilaya de Bouira</option>
    <option value="Wilaya_Tamanrasset">Wilaya de Tamanrasset</option>
    <option value="Wilaya_Tébessa">Wilaya de Tébessa</option>
    <option value="	Wilaya_Tlemcen">	Wilaya de Tlemcen</option>
    <option value="Wilaya_Tiaret">Wilaya de Tiaret</option>
    <option value="Wilaya_Tizi Ouzou	">Wilaya de Tizi Ouzou	</option>
    <option value="Wilaya_Alger">Wilaya d'Alger</option>
    <option value="Wilaya_Djelfa">Wilaya de Djelfa</option>
    <option value="Wilaya_Jijel">Wilaya de Jijel</option>
    <option value="Wilaya_Sétif">Wilaya de Sétif</option>
    <option value="	Wilaya_Saïda">	Wilaya de Saïda</option>
    <option value="Wilaya_Skikda">Wilaya de Skikda</option>
    <option value="	Wilaya_Sidi Bel Abbès">	Wilaya de Sidi Bel Abbès</option>
    <option value="Wilaya_Annaba">Wilaya d'Annaba</option>
    <option value="Wilaya_Guelma">Wilaya de Guelma</option>
    <option value="Wilaya_Constantine">Wilaya de Constantine</option>
    <option value="Wilaya_Médéa">Wilaya de Médéa</option>
    <option value="	Wilaya_Mostaganem">	Wilaya de Mostaganem</option>
    <option value="Wilaya_M'Sila">Wilaya de M'Sila</option>
    <option value="Wilaya_Mascara">Wilaya de Mascara</option>
    <option value="	Wilaya_Ouargla ">	Wilaya de Ouargla </option>
    <option value="Wilaya_Oran">Wilaya d'Oran</option>
    <option value="	Wilaya_Bayadh">	Wilaya d'El Bayadh</option>
    <option value="	Wilaya_Illizi">	Wilaya d'Illizi</option>
    <option value="	Wilaya_Bordj Bou Arreridj">	Wilaya de Bordj Bou Arreridj</option>
    <option value="	Wilaya_Boumerdès">	Wilaya de Boumerdès</option>
    <option value="	Wilaya_Tarf">	Wilaya d'El Tarf</option>
    <option value="Wilaya_Tindouf">Wilaya de Tindouf</option>
    <option value="	Wilaya_Tissemsilt">	Wilaya de Tissemsilt</option>
    <option value="Wilaya_Oued">Wilaya d'El Oued</option>
    <option value="Wilaya_Khenchela">Wilaya de Khenchela</option>
    <option value="	Wilaya_Souk Ahras">	Wilaya de Souk Ahras</option>
    <option value="Wilaya_Tipaza">Wilaya de Tipaza</option>
    <option value="	Wilaya_Mila">	Wilaya de Mila</option>
    <option value="Wilaya_AïnDefla">Wilaya d'Aïn Defla</option>
    <option value="	Wilaya_Naâma">	Wilaya de Naâma</option>
    <option value="Wilaya_AïnTémouchent">Wilaya d'Aïn Témouchent</option>
    <option value="	Wilaya_Ghardaïa ">	Wilaya de Ghardaïa </option>
    <option value="Wilaya_Relizane">Wilaya de Relizane</option>
    <option value="Wilaya_Timimoun ">Wilaya de Timimoun </option>
    <option value="Wilaya_Bordj Badji Mokhtar">Wilaya de Bordj Badji Mokhtar</option>
    <option value="	Wilaya_OuledDjellal">	Wilaya d'Ouled Djellal</option>
    <option value="	Wilaya_Béni Abbès">	Wilaya de Béni Abbès</option>
    <option value="	Wilaya_InSalah ">	Wilaya d'In Salah </option>
    <option value="Wilaya_InGuezzam">Wilaya d'In Guezzam</option>
    <option value="	Wilaya_Touggourt">	Wilaya de Touggourt</option>
    <option value="Wilaya_Djanet">Wilaya de Djanet</option>
    <option value="Wilaya_ElMGhair">Wilaya d'El M'Ghair</option>
    <option value="	Wilaya_ElMeniaa ">	Wilaya d'El Meniaa </option>
  </select>
  {wilaya && <h2 className="mt-3">{wilaya}</h2>}
            </div>
            
                  
            <div class="mt-4">
              <label class="block text-gray-700"> كلمة السر</label>
              <input type="password" id="" placeholder="ادخل كلمة السر" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required
                    value = {password} onChange ={(e)=>setPassword(e.target.value)}
                     />
            </div>

            <div class="mt-4">

              <label class="block text-gray-700">  تاكيد كلمة السر </label>

              <input type="password" id="" placeholder="ادخل كلمة السر" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required

                    value = {confirmPassword} onChange ={(e)=>setConfirmPassword(e.target.value)}

                     />

            </div>

            <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
                  px-4 py-3 mt-6">انشاء الحساب</button>
          </form>

          <hr class="my-6 border-gray-300 w-full" />
    
          <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">

                <div class="flex items-center justify-center">

                <span class="ml-4">
                تسجيل الدخول بحساب غوغل
                </span>

                </div>

              </button>
    
          <p class="mt-8"> لديك حساب? <a href="#" class="text-blue-500 hover:text-blue-700 font-semibold">   تسجيل الدخول 
                  </a>

                  </p>
        </div>
      </div>
    
    </section>
  )

}

export default RegisterScreen

