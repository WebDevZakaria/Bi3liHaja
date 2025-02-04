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


export default function Product({product}) {
   

  
  let history = useNavigate();
  const addToCardHandler = ()=>{


    history(`/card/${product._id}`)    

 }

  return (




<div class="m-4 mx-auto max-w-screen-lg rounded-md border border-gray-100 text-gray-600 shadow-md">
<div class="relative flex h-full flex-col text-gray-600 md:flex-row">
  <div class="relative p-8 md:w-4/6"> 

  <Link to={`/products/${product._id}`}>

  
  <div class="flex flex-col md:flex-row">

      <h2 class="mb-2 text-2xl font-black">{product.name}</h2>
      <span class="ml-2 text-xs uppercase">Tailwind</span>
    </div>
    <p class="mt-3 font-sans text-base tracking-normal">{product.description} </p>

  </Link>
    <div class="flex flex-col md:flex-row md:items-end">
      <p class="mt-6 text-4xl font-black">{product.price} DA<sup class="align-super text-sm">fixed</sup></p>
      <span class="ml-2 text-xs uppercase">258 Sales</span>
    </div>
    <div class="mt-8 flex flex-col sm:flex-row">
      <button  onClick={addToCardHandler} class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md bg-blue-400 py-2 px-8 text-center text-white transition duration-150 ease-in-out hover:translate-y-1 hover:bg-emerald-500">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
       Add To Cart
      </button>
      <Link to={`/products/${product._id}`}>
      <button class="mr-2 mb-4 flex cursor-pointer items-center justify-center rounded-md border py-2 px-8 text-center text-gray-500 transition duration-150 ease-in-out hover:translate-y-1 hover:bg-rose-500 hover:text-white">
        Preview</button>
       </Link>
      
    </div>
  </div>
  <div class="mx-auto flex items-center px-5 pt-1 md:p-8">
    <img class="block h-auto max-w-full rounded-md shadow-lg" src={product.image} alt="Shop image" />
  </div>
</div>
</div>




  );

}

