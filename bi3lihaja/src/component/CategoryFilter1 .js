import React from 'react'
import SHOP1 from '../images/computer.png'

function CategoryFilter1 () {
  return (
    <section>

<div class="mt-60 ml-20 mr-20">

<div class="flex flex-col">
  <div class="rounded-xl border border-gray-200 bg-white p-6 shadow-lg">
    <form class="">
      <div class="relative mb-10 w-full flex  items-center justify-between rounded-md">
        <svg class="absolute left-2 block h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" class=""></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65" class=""></line>
        </svg>
        <input type="name" name="search" class="h-12 w-full cursor-text rounded-md border border-gray-100 bg-gray-100 py-4 pr-40 pl-12 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" placeholder="Search by name, type, manufacturer, etc" />
      </div>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <div class="flex flex-col">
          <label for="name" class="text-sm font-medium text-stone-600">Name</label>
          <input type="text" id="name" placeholder="Raspberry juice" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>

        <div class="flex flex-col">
          <label for="manufacturer" class="text-sm font-medium text-stone-600">Manufacturer</label>

          <select id="manufacturer" class="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option>Cadberry</option>
            <option>Starbucks</option>
            <option>Hilti</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label for="date" class="text-sm font-medium text-stone-600">Date of Entry</label>
          <input type="date" id="date" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50" />
        </div>

        <div class="flex flex-col">
          <label for="status" class="text-sm font-medium text-stone-600">Status</label>

          <select id="status" class="mt-2 block w-full cursor-pointer rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50">
            <option>Dispached Out</option>
            <option>In Warehouse</option>
            <option>Being Brought In</option>
          </select>
        </div>
      </div>

      <div class="mt-6 grid w-full grid-cols-2 justify-end space-x-4 md:flex">
        <button class="rounded-lg bg-gray-200 px-8 py-2 font-medium text-gray-700 outline-none hover:opacity-80 focus:ring">Reset</button>
        <button class="rounded-lg bg-blue-600 px-8 py-2 font-medium text-white outline-none hover:opacity-80 focus:ring">Search</button>
      </div>
    </form>
  </div>
</div>

</div>

<section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src={SHOP1} alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del> 
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button> 
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/exH8iOZwkjQekSALkXCZb.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/86WxAQqZpR5CqrhSPKwNv.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/0RV9Zy3daoeMbDmTOOMKm.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/1DULzCtZvWhr5q5DDT6Ac.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/neZnfwBHi0f-4TivjA6BS.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/POklWwmmu0AtDZe5tNh9j.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      

      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      

    </div>
  </div>
</section>



<nav aria-label="Page Navigation" class="mx-auto my-10 flex max-w-md justify-between space-x-2 rounded-md bg-white py-2">
  <a class="flex items-center space-x-1 font-medium text-gray-400" aria-label="Previous Page" tabindex="-1">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clip-rule="evenodd" />
    </svg>
  </a>
  <ul class="flex">
    <li><a href="#" class="rounded-md border-2 border-blue-600 px-2 text-lg font-medium text-blue-600 sm:px-3">1</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">2</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">3</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">4</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">5</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">6</a></li>
    <li><a href="#" class="px-2 text-lg font-medium sm:px-3 hover:text-blue-600">7</a></li>
  </ul>
  <a class="flex items-center space-x-1 font-medium hover:text-blue-600" href="#" aria-label="Next Page">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-4 w-4">
      <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z" clip-rule="evenodd" />
    </svg>
  </a>
</nav>


      
    </section>


  )
}

export default CategoryFilter1 
