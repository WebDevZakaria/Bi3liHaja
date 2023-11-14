import React from 'react'
import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

function RegisterScreen() {

const [phone, setPhone] = useState('');
const specificCountries = ['dz'];
const excludedCountries = ['gb', 'fr']; 


  return (
  
    <section class="flex flex-col md:flex-row h-screen items-center mb-28">
    
      <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
        <img src="https://cdn.pixabay.com/photo/2019/10/10/08/11/shopping-4538982_1280.jpg" alt="" class="w-full h-full object-cover" />
      </div>
    
      <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center">
    
        <div class="w-full h-100">
    
    
          <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">انشاء حساب جديد </h1>
    
          <form class="mt-6" action="#" method="POST">
            <div>
              <label class="block text-gray-700">اللقب</label>
              <input type="text" name="" id="" placeholder="ادخل لقبك" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
            </div>
    
            <div class="mt-4">
              <label class="block text-gray-700"> الاسم</label>
              <input type="text" name="" id="" placeholder="ادخل اسمك" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required />
            </div>
            
            <div class="mt-4">
              <label class="block text-gray-700"> الايميل</label>
              <input type="email" name="" id="" placeholder="ادخل ايميلك" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required />
            </div>
            
            <div class="mt-4">
              <label class="block text-gray-700"> رقم الهاتف</label>
              <div className='w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none'>
              <PhoneInput
      defaultCountry="dz"
      value={phone}
      onChange={(phone) => setPhone(phone)}
      onlyCountries={specificCountries}
      excludeCountries={excludedCountries}
      
    />
    </div>
            </div>
            
            <div class="mt-4">
              <label class="block text-gray-700">ولايتك</label>
              <select id="wilaya" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none">
    <option value="red">Wilaya d'Adrar </option>
    <option value="green">Wilaya de Chlef</option>
    <option value="blue">Wilaya de Laghouat</option>
    <option value="blue">Wilaya d'Oum El Bouaghi</option>
    <option value="Wilaya de Batna">Wilaya de Batna</option>
    <option value="Wilaya de Béjaïa">Wilaya de Béjaïa</option>
    <option value="	Wilaya de Biskra">	Wilaya de Biskra *</option>
    <option value="Wilaya de Béchar">Wilaya de Béchar *</option>
    <option value="Wilaya de Blida">Wilaya de Blida</option>
    <option value="Wilaya de Bouira">Wilaya de Bouira</option>
    <option value="Wilaya de Tamanrasset">Wilaya de Tamanrasset</option>
    <option value="Wilaya de Tébessa">Wilaya de Tébessa</option>
    <option value="	Wilaya de Tlemcen">	Wilaya de Tlemcen</option>
    <option value="Wilaya de Tiaret">Wilaya de Tiaret</option>
    <option value="Wilaya de Tizi Ouzou	">Wilaya de Tizi Ouzou	</option>
    <option value="Wilaya d'Alger">Wilaya d'Alger</option>
    <option value="Wilaya de Djelfa">Wilaya de Djelfa</option>
    <option value="Wilaya de Jijel">Wilaya de Jijel</option>
    <option value="Wilaya de Sétif">Wilaya de Sétif</option>
    <option value="	Wilaya de Saïda">	Wilaya de Saïda</option>
    <option value="Wilaya de Skikda">Wilaya de Skikda</option>
    <option value="	Wilaya de Sidi Bel Abbès">	Wilaya de Sidi Bel Abbès</option>
    <option value="Wilaya d'Annaba">Wilaya d'Annaba</option>
    <option value="Wilaya de Guelma">Wilaya de Guelma</option>
    <option value="Wilaya de Constantine">Wilaya de Constantine</option>
    <option value="Wilaya de Médéa">Wilaya de Médéa</option>
    <option value="	Wilaya de Mostaganem">	Wilaya de Mostaganem</option>
    <option value="Wilaya de M'Sila">Wilaya de M'Sila</option>
    <option value="Wilaya de Mascara">Wilaya de Mascara</option>
    <option value="	Wilaya de Ouargla ">	Wilaya de Ouargla </option>
    <option value="Wilaya d'Oran">Wilaya d'Oran</option>
    <option value="	Wilaya d'El Bayadh">	Wilaya d'El Bayadh</option>
    <option value="	Wilaya d'Illizi">	Wilaya d'Illizi</option>
    <option value="	Wilaya de Bordj Bou Arreridj">	Wilaya de Bordj Bou Arreridj</option>
    <option value="	Wilaya de Boumerdès">	Wilaya de Boumerdès</option>
    <option value="	Wilaya d'El Tarf">	Wilaya d'El Tarf</option>
    <option value="Wilaya de Tindouf">Wilaya de Tindouf</option>
    <option value="	Wilaya de Tissemsilt">	Wilaya de Tissemsilt</option>
    <option value="Wilaya d'El Oued">Wilaya d'El Oued</option>
    <option value="Wilaya de Khenchela">Wilaya de Khenchela</option>
    <option value="	Wilaya de Souk Ahras">	Wilaya de Souk Ahras</option>
    <option value="Wilaya de Tipaza">Wilaya de Tipaza</option>
    <option value="	Wilaya de Mila">	Wilaya de Mila</option>
    <option value="Wilaya d'Aïn Defla">Wilaya d'Aïn Defla</option>
    <option value="	Wilaya de Naâma">	Wilaya de Naâma</option>
    <option value="Wilaya d'Aïn Témouchent">Wilaya d'Aïn Témouchent</option>
    <option value="	Wilaya de Ghardaïa ">	Wilaya de Ghardaïa </option>
    <option value="Wilaya de Relizane">Wilaya de Relizane</option>
    <option value="Wilaya de Timimoun ">Wilaya de Timimoun </option>
    <option value="Wilaya de Bordj Badji Mokhtar">Wilaya de Bordj Badji Mokhtar</option>
    <option value="	Wilaya d'Ouled Djellal">	Wilaya d'Ouled Djellal</option>
    <option value="	Wilaya de Béni Abbès">	Wilaya de Béni Abbès</option>
    <option value="	Wilaya d'In Salah ">	Wilaya d'In Salah </option>
    <option value="Wilaya d'In Guezzam">Wilaya d'In Guezzam</option>
    <option value="	Wilaya de Touggourt">	Wilaya de Touggourt</option>
    <option value="Wilaya de Djanet">Wilaya de Djanet</option>
    <option value="Wilaya d'El M'Ghair">Wilaya d'El M'Ghair</option>
    <option value="	Wilaya d'El Meniaa ">	Wilaya d'El Meniaa </option>
  </select>
            </div>
            
            <div class="mt-4">
              <label class="block text-gray-700"> كلمة السر</label>
              <input type="text" name="" id="" placeholder="ادخل كلمة السر" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required />
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

