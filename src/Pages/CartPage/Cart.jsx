import React from 'react'

export default function Cart() {
  return (
    <div className='container mx-auto px-4 lg:px-24  min-h-[calc(100dvh-4rem-6rem)]'>
        
        <h1 className=' md:text-2xl  lg:text-3xl my-3 font-semibold'>Cart</h1>
        
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>


        <div className='border p-2 flex gap-4'>

<img className='h-28 w-28 aspect-square object-cover' src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

<div className='flex flex-col justify-between'>
<div >
<h1 className='text-xl font-light line-clamp-1'>5 sleeve Premium Quality T-Shirt 5 sleeve Premium Quality T-Shirt</h1>
<h1 className='text-xl font-semibold'>₹2990</h1>
</div>
<div className='flex gap-5'>
<div className='flex'>
<button className='h-8 bg-gray-200 w-8'><i class="ri-subtract-line"></i></button>
<span className='h-8 bg-slate-100 w-8 flex items-center justify-center'>2</span>
  <button className='h-8 bg-gray-200 w-8'><i class="ri-add-line"></i></button>
</div>
<button className='bg-red-600 text-white px-4 font-light text-sm h-8'><i class="ri-delete-bin-4-fill"></i> Remove</button>
</div>

</div>
</div>


<div className='border p-2 flex gap-4'>

<img className='h-28 w-28 aspect-square object-cover' src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

<div className='flex flex-col justify-between'>
<div >
<h1 className='text-xl font-light line-clamp-1'>5 sleeve Premium Quality T-Shirt 5 sleeve Premium Quality T-Shirt</h1>
<h1 className='text-xl font-semibold'>₹2990</h1>
</div>
<div className='flex gap-5'>
<div className='flex'>
<button className='h-8 bg-gray-200 w-8'><i class="ri-subtract-line"></i></button>
<span className='h-8 bg-slate-100 w-8 flex items-center justify-center'>2</span>
  <button className='h-8 bg-gray-200 w-8'><i class="ri-add-line"></i></button>
</div>
<button className='bg-red-600 text-white px-4 font-light text-sm h-8'><i class="ri-delete-bin-4-fill"></i> Remove</button>
</div>

</div>
</div>

</div>

<div className='flex justify-end mt-4'>
    <button className='h-12 px-8 bg-violet-900 text-white/80'>Place Order</button>
</div>
        
        
    </div>
  )
}
