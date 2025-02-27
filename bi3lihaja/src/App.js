import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import ResponsiveAppBar from './component/ResponsiveAppBar';
//import { Theme } from '@radix-ui/themes';
//import { ChakraProvider } from '@chakra-ui/react'
import AddToCard from './screens/AddToCard';
import Footer from './component/Footer';
import LoginScreen from './screens/LoginScreen';
//import RegisterScreen from './screens/RegisterScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingScreen from './screens/ShippingScreen';
import ProfileScreen from './screens/ProfileScreen';
import OrderSummary from './screens/OrderSummary';
import AddProductScreen from './screens/AddProductScreen';
import FilterCategoryScreen from './screens/FilterCategoryScreen';



import  Home from './admin/pages/dashboard/home'

import  Tables from './admin/pages/dashboard/tables'
import AllUsers from './admin/pages/dashboard/AllUsers';
import ProductDemande from './admin/pages/dashboard/ProductDemande';

function App() {

  return (

<BrowserRouter>

<ResponsiveAppBar />

    <main className="">

      <Routes>

      <Route path='/card/' element={<AddToCard/>}>

      <Route path=':id' element={<AddToCard/>}/>

      </Route>

        <Route path='/' element = {<HomeScreen/>} />
        <Route path='/products/:id' element = {<ProductScreen/>} />
        <Route path='/login/' element = {<LoginScreen/>} />
        <Route path='/Register/' element = {<RegisterScreen/>} />
        <Route path='/login/shipping' element = {<ShippingScreen/>} />
        <Route path='/profile/' element = {<ProfileScreen/>} />
        <Route path='/success/' element = {<OrderSummary/>} />
        <Route path='/addProduct/' element = {<AddProductScreen/>} />
        <Route path='/allproducts/' element = {<FilterCategoryScreen/>} />



        
      <Route path="/dashboard/home" element={<Home />} />
      <Route path="/dashboard/products" element={<Tables />} />

      <Route path="/dashboard/allusers" element={<AllUsers />} />

      <Route path="/dashboard/productdemande" element={<ProductDemande />} />


    

      </Routes>

    </main>

    <Footer />

    </BrowserRouter>

  );
}

export default App;
