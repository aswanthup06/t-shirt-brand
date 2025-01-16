import React from 'react'
import Navbar from '../../Components/Navbar'
import { Add, ShoppingCartPlus, Subtract } from '@carbon/icons-react'
import { Heart, Share, Share2 } from 'lucide-react'

export default function ProDetails() {

  const imgs = [

    {
      id: 1,
      img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1736264335247-8ec5664c8328?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      id: 2,
      img: 'https://images.unsplash.com/photo-1736754079614-8b43bcba9926?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    }


  ] 

  return (
    <div>




<div className='container mx-auto px-4 lg:px-24 mt-6'>

  <div className='grid grid-cols-1 md:grid-cols-2 gap-10'> 

    <div className='flex flex-col-reverse lg:flex-row gap-4' >


 


      <div className='flex gap-4 lg:flex-col'>

      {imgs.map((imgs) => (
<div className='h-24 w-24 border-4 hover:border-green-600 duration-500'>
<img className='h-full w-full object-cover' 
src={imgs.img}
/>
</div>
))}

</div>


      <div className='relative h-[28rem] md:h-[32rem] lg:h-[40rem] w-full overflow-hidden'>
        <img  className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      
        <button className="absolute top-3 right-3 bg-white w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center">
        <i className="ri-heart-3-fill text-rose-700"></i>
</button>


             
        <button className="absolute top-16 right-3 bg-white w-6 h-6 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <div
  className="w-3 h-3  md:w-5 md:h-5"
  style={{
    strokeWidth: '1.25', 
  }}
>
<Share2 size="100%" strokeWidth="inherit" />

 

</div>
            </button>



           

      
      </div>




    </div>


    <div>

      <h1 className='text-2xl md:text-3xl lg:text-4xl font-light'>5 sleeve Premium Quality T-Shirt 5 sleeve Premium Quality T-Shirt</h1>
     
     <div className='border p-6 mt-4 flex items-center justify-between'>
      <h1 className='text-2xl font-bold mt-2'>₹2990</h1>

<div className='flex gap-4'>


<button><Subtract /></button>
<h1>2</h1>
  <button><Add /></button>
</div>



    </div>

    <div className='flex gap-2'>

    <div className='flex justify-center items-center h-10 w-10 border-2 mt-6 border-green-600'>
      <h1>M</h1>
    </div>

    <div className='flex justify-center items-center h-10 w-10 border-2 mt-6 '>
      <h1>L</h1>
    </div>
    <div className='flex justify-center items-center h-10 w-10 border-2 mt-6 '>
      <h1>XL</h1>
    </div>
</div>


<div className='grid grid-cols-2 gap-4 mt-6'>

  <button className='h-16 border flex items-center justify-center gap-4 text-green-800 border-green-600 duration-500 hover:bg-green-200/40'><ShoppingCartPlus />Add to Cart</button>

  <button className='bg-green-600 text-white h-16'>Buy Now</button>


</div>


<div className='mt-6'>
  <h1 className='text-2xl font-semibold mb-2'>Discription</h1>

  <h1 className='text-slate-700'>
  Crafted from premium materials, this 5 sleeve t-shirt offers superior comfort and durability. Perfect for all-day wear, it provides a timeless style that never goes out of fashion. Made with high-quality fabric, it guarantees a lasting fit and feel, making it a must-have for any wardrobe.
  </h1>
</div>

    </div>


  </div>



</div>



    </div>
  )
}
