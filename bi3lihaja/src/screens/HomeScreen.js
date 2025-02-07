import React from 'react'

import Testimonial from '../component/Testimonial'
import Team from '../component/Team'
import HeroScreen from '../component/HeroScreen'
import ShowCaractiristic from '../component/ShowCaractiristic'
import Market from '../component/Market'
import BrandImage from '../component/BrandImage'
import { useEffect } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useDispatch,useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

import { useLocation } from 'react-router-dom';

import Product from '../component/Product'
import ProductSearch from '../component/ProductSearch'



function HomeScreen() {


let location = useLocation()


  const dispatch = useDispatch()

  const productList = useSelector(state=>state.productList)  
  const { products }  = productList


   let keyword = location.search
     useEffect(()=>{

        dispatch(listProducts(keyword))

   },[dispatch,keyword])












  
  return (

    <section>
      <HeroScreen />
      <Market />

       <>
          {!keyword ? <ProductSearch/> 
         :
         (

          
          <section class="w-screen">
      
      <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto my-10 max-w-md text-center">
            <h2 class="font-serif text-5xl font-bold sm:text-3xl lg:text-6xl">اشهر المنتجات</h2>
      </div>
      </div>
      
      {products.map(product =>(
      
      <div key = {product._id}>
      
      <Product product = {product} />
      
      </div>
      ))}
      
      </section>

         )}
      
      
      
      
      </>
      
      <Team />  

      <ShowCaractiristic />
      <Testimonial />   
      
    </section>

  )
}

export default HomeScreen
