import React from 'react'
import 'remixicon/fonts/remixicon.css'

export default function WishList() {

    const defaultImage = 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; // Default image URL

    const products = [
        {
          id: 1,
          name: '5 Sleeve Premium Quality T-Shirt',
          price: 200,
          img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 2,
          name: 'Casual Cotton Shirt',
          price: 150,
          img: 'https://images.unsplash.com/photo-1604026512184-8885b0a7d98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGxvc3QlMjBzaGlydHxlbnwwfHx8fDE2OTIwMTAzNjE&ixlib=rb-4.0.3&q=80&w=400',
        },
    ];

    const handleImageError = (e) => {
        e.target.onerror = null; // Prevent infinite loop if the default image fails
        e.target.src = defaultImage; // Fallback to default image
      };

  return (
    <div className='min-h-[calc(100dvh-4rem-6rem)]'>

        
<h1 className='container mx-auto px-4 lg:px-24 md:text-2xl  lg:text-3xl my-3 font-semibold'>My Wishlist</h1>

<div className="grid gap-3 md:gap-3 lg:gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto px-4 lg:px-24">
      {products.map((product) => (
        <div key={product.id}>
          <div className="h-48 md:h-72 overflow-hidden relative">
            <img
              className="h-full w-full object-cover hover:scale-125 duration-500"
              src={product.img}
              alt={product.name}
              onError={handleImageError}
            />
            <div className="absolute top-3 right-3 bg-white w-6 h-6 md:w-9 md:h-9 rounded-full flex items-center justify-center">
                  <i className="ri-heart-3-fill text-rose-700"></i>
            </div>
          </div>
          <h1 className="mt-2 text-sm md:text-lg line-clamp-1">{product.name}</h1>
          <h1 className="text-base md:text-xl font-semibold">₹{product.price}</h1>
        </div>
      ))}

     
    </div>
</div>
  )
}