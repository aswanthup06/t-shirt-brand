import { Heart } from 'lucide-react'
import React from 'react'





export default function ProductList() {

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
      {
        id: 3,
        name: 'Stylish Hoodie',
        price: 300,
        img: 'https://images.unsplash.com/photo-1584172446654-6d5a4534bc2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDV8fGhvb2RpZXxlbnwwfHx8fDE2OTIwMTAzNjE&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 4,
        name: 'Modern Denim Jacket',
        price: 400,
        img: 'https://images.unsplash.com/photo-1592255480977-d9c67be6b0b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGRlbmltJTIwamFja2V0fGVufDB8fHx8MTY5MjAxMDM2MQ&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 5,
        name: 'Classic Leather Belt',
        price: 100,
        img: 'https://images.unsplash.com/photo-1574671718051-9da44d5bfae1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGxlYXRoZXIlMjBiZWx0fGVufDB8fHx8MTY5MjAxMDM2MQ&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 6,
        name: 'Slim Fit Jeans',
        price: 250,
        img: 'https://images.unsplash.com/photo-1560224363-6b9f27324a42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGplyXN8ZW58MHx8fHwxNjkyMDEwMzYx&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 7,
        name: 'Summer Flip-Flops',
        price: 50,
        img: 'https://images.unsplash.com/photo-1606166875673-b7e9b7a18e9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDZ8fGZsaXAtZmxvcHN8ZW58MHx8fHwxNjkyMDEwMzYx&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 8,
        name: 'Casual Sneakers',
        price: 300,
        img: 'https://images.unsplash.com/photo-1521747116042-bb8f5023d80f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHNueWtlcnN8ZW58MHx8fHwxNjkyMDEwMzYx&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 9,
        name: 'Formal Leather Shoes',
        price: 500,
        img: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDN8fGxldGhlciUyMHNob2VzfGVufDB8fHx8MTY5MjAxMDM2MQ&ixlib=rb-4.0.3&q=80&w=400',
      },
      {
        id: 10,
        name: 'Winter Beanie',
        price: 70,
        img: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      },
    ];
    
    // Function to handle image loading errors
    const handleImageError = (e) => {
      e.target.onerror = null; // Prevent infinite loop if the default image fails
      e.target.src = defaultImage; // Fallback to default image
    };
      
      
      
      
      

  return (
    <div>

        
<h1 className='container mx-auto px-4 lg:px-24 md:text-2xl  lg:text-3xl my-3 mt-8'>Our Latest Collections</h1>

<div className="grid gap-6 grid-cols-2 md:grid-cols-4 lg:grid-cols-5 container mx-auto px-4 lg:px-24">
      {products.map((product) => (
        <div key={product.id}>
          <div className="h-48 md:h-72 overflow-hidden relative">
            <img
              className="h-full w-full object-cover hover:scale-125 duration-500"
              src={product.img}
              alt={product.name}
              onError={handleImageError}
            />
            <div className="absolute top-3 right-3 bg-white w-9 h-9 rounded-full flex items-center justify-center">
              <Heart size={20} strokeWidth={1.25} />
            </div>
          </div>
          <h1 className="mt-4 text-lg line-clamp-1">{product.name}</h1>
          <h1 className="text-xl font-semibold">₹{product.price}</h1>
        </div>
      ))}

     
    </div>









    </div>
  )
}
