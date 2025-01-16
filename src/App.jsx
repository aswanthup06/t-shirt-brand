import { useState } from 'react'
import './App.css'
import Home from './Pages/HomePage/Home'
import ProDetails from './Pages/ProductDetailsPage/ProDetails'
import Profile from './Pages/ProfilePage/Profile'
import Orders from './Pages/MyOrders/Orders'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Orders />
     <Profile />
     <ProDetails />

     <Home />
     
    </>
  )
}

export default App
