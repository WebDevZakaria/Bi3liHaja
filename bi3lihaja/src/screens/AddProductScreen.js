import React,{useEffect,useState} from 'react'
import GUIDE from '../images/guide.png'
import STARTSELL from '../images/startsell.png'
import { useDispatch,useSelector } from 'react-redux'
import { useLocation ,useNavigate} from 'react-router-dom'
import { addproduct } from '../actions/productActions'


function AddProductScreen() {

  const location =  useLocation()
  let history = useNavigate();

  const  [name,setName] = useState('')
  const  [image,setImage] = useState('')
  const  [brand,setBrand] = useState('')
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [yourAdresss, setYourAdresss] = useState('');
  const [wilaya, setWilaya] = useState('');
  const  [price,setPrice] = useState('')


  const dispatch = useDispatch()

  const userLogin = useSelector(state=>state.userLogin)
  const {userInfo} = userLogin

  const orderCreate = useSelector(state=>state.productAdd)
  const { success } = orderCreate


  useEffect(()=>{

    if (!userInfo) {

      history('/login')

  }else {
    if (success){

      history('/')
      
  }

  setWilaya(userInfo.wilaya)

  }

  },[history,userInfo,dispatch,success])




  const submitHandler=(e)=>{

      

          dispatch(addproduct(name,image,brand,category,description,yourAdresss,wilaya,price))



  }

  console.log(wilaya)


  return (
    <section className="bg-[url('https://images.pexels.com/photos/7195232/pexels-photo-7195232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-no-repeat">
    <div className=' flex flex-col  lg:flex-row mt-0'>
    
    <div class="max-w-6xl mt-8 p-6 mb-36 mx-auto bg-blue-500 rounded-md shadow-md dark:bg-gray-800">
    <h1 class="text-xl font-bold text-white capitalize dark:text-white">اضف منتجك</h1>
    <form>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class="text-white dark:text-gray-200" for="name">اسم المنتج</label>
                <input id="name" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={name}    onChange ={(e)=>setName(e.target.value)}
                 />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="category">  الصنف </label>
                <input id="category" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" 
                value={category}    onChange ={(e)=>setCategory(e.target.value)}
                />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="brand"> البراند </label>
                <input id="brand" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={brand}    onChange ={(e)=>setBrand(e.target.value)}
                 />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="description">شرح المنتج</label>
                <textarea id="description" type="textarea" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={description}    onChange ={(e)=>setDescription(e.target.value)}
                ></textarea>
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="description">الولاية </label>
                <div className='text-red-500 font-bold'><br/>{wilaya} <br/>ولايتك تسجل اوتوماتيكيا  على حسب معلومات تسجيل الدخول</div>
                </div>
            
                <div>
                <label class="text-white dark:text-gray-200" for="yourAdresss">العنوان الشخصي </label>
                <input id="yourAdresss" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={yourAdresss}    onChange ={(e)=>setYourAdresss(e.target.value)}
                 />
            </div>

            <div>
                <label class="text-white dark:text-gray-200" for="price"> السعر </label>
                <input id="price" type="number" step="0.01" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={price}    onChange ={(e)=>setPrice(e.target.value)}
                 />
            </div>


           {/*  <div>
                <label class="text-white dark:text-gray-200" for="passwordConfirmation">Select</label>
                <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                    <option>Surabaya</option>
                    <option>Jakarta</option>
                    <option>Tangerang</option>
                    <option>Bandung</option>
                </select>
            </div>

            */}
       
            <div>
                <label class="block text-sm font-medium text-white">
                Image
              </label>
              <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div class="space-y-1 text-center">
                  <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                    <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <div class="flex text-sm text-gray-600">
                    <label for="file-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                      <span class="">Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" 
                      value={image}    onChange ={(e)=>setImage(e.target.value)}
                      />
                    </label>
                    <p class="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p class="text-xs text-white">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
        </div>

        <div class="flex justify-end mt-6">
            <button class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
</div>

</div>

</section>
  )
}

export default AddProductScreen
