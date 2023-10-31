import React ,{useEffect} from 'react'

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {Link,useParams} from 'react-router-dom'
import { listProductDetails } from '../actions/productActions'
import { useDispatch,useSelector } from 'react-redux'

import Review from '../component/Review';



const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
  },
];

function ProductScreen() {

  const { id } = useParams();

  const dispatch = useDispatch()


const productdetails = useSelector(state=>state.productDetails)

const {loading, error,product} = productdetails

useEffect(()=>{
   
     dispatch(listProductDetails(id))    

  },[dispatch,id])


  return (
    <section className='section h-[1800px]'>
      <div className='flex flex-col lg:flex-row space-x-[100px]'>
      <div>
    <div className='ml-[-10px]'> 
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className='mt-8 '>

        <Box>
          <img src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'/>
        </Box>

      </Container>
    </React.Fragment> 

    </div>
    <div>
      <h1 className='text-[40px] mx-[50px] mt-8'>{product.name}</h1>
      <p className='mx-4 mt-8 mb-8'>{product.description}</p>
    </div>
    <div className='ml-16 mb-28'>
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    </div>

    
<div class='mt-8 '>
    <div class=" h-[400px] w-[600px] py-[40px] px-[220px] rounded-lg border bg-white shadow-md">

        <div class="mb-2 flex justify-between">
          <p class="text-gray-700 text-left">السعر</p>
          <p class="text-gray-700">2000 DA</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">توصيل</p>
          <p class="text-gray-700">200 DA</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">السعر الاجمالي</p>
            <p class="text-lg font-bold">2200 DA</p>

        </div>
       <Link to={`/addtocard/`}> <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">اضف الى السلة</button></Link>
      </div>

    </div>
    </div>    




    </section>

  )

}

export default ProductScreen
