import React from 'react'



export default function Profile() {
  return (

<div className='min-h-[calc(100dvh-4rem-5rem)]'>




    <div className='container mx-auto px-4 lg:px-24 '>
        
        
        
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

            <div className='border p-4'>

            <div className='flex justify-between items-center'> 
                <h1 className='font-semibold'>Profile</h1>
                <button className='h-8 bg-green-600 text-white px-5 text-sm'>
                     Edit
                </button>
            </div>


                <div className='flex justify-between items-center'> 
                <h1 className='mt-4'>Name:</h1>
                <h1 className='mt-4'>Aswanth UP</h1>
                </div>

                <div className='flex justify-between items-center'> 
                <h1 className='mt-4'>Email:</h1>
                <h1 className='mt-4'>aswanthup06@gmail.com</h1>
                </div>

            </div>

            <div className='border p-4 '>
            <div className='flex justify-between items-center'> 
                <h1 className='font-semibold'>Location</h1>
                <button className='h-8 bg-green-600 text-white px-5 text-sm'>
                     Add
                </button>
            </div>
            </div>

</div>


        </div>
        
        
    </div>
  )
}
