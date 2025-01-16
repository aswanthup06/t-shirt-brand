import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='container mx-auto px-4 lg:px-24 flex justify-between h-16 items-center'>
<div>
    <h1 className='font-semibold text-xl'><span className='text-red-600'>FASION</span> FACTORY</h1>
</div>



<div className='hidden md:block'>
  <ul className='flex gap-5 text-slate-800'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/product-details">Product-Details</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/orders">Orders</Link></li>
  </ul>
</div>







<div className='flex items-center gap-5'>
  

<ShoppingCart size={20} strokeWidth={1.25} />

<div className='h-8 w-8 rounded-full  overflow-hidden'>
     <img className='object-cover w-full h-full rounded-full' src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
</div>
</div>


    </div>
  )
}
