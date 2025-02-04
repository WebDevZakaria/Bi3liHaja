import * as React from 'react';
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

import Product from './Product';


export default function ImgMediaCard() {

  const dispatch = useDispatch()

  const productList = useSelector(state=>state.productList)  
  const { products }  = productList



     useEffect(()=>{

        dispatch(listProducts())

   },[dispatch])



  return (

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




  );

}

