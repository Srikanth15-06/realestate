import React from 'react'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Blog from './Pages/Blog'
import Services from './Pages/Services'
import Listing from "./Pages/Listing"
import About from "./Pages/About"
import Agent from "./Pages/Agent"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Header from './Components/Header'

import OurAgentProvider from './Context/Context'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home/>
    },
    {
      path:"/blog",
      element:<Blog/>
    },
    {
      path:"/agent",
      element:<Agent/>
    },
    {
      path:"/about",
      element:<About/>
    },
    {
      path:"/services",
      element:<Services/>
    },
    {
      path:"/contact",
      element:<Contact/>
    },
    {
      path:"/listing",
      element:<Listing/>
    }
  ])
  
  return (
    <OurAgentProvider>
      <RouterProvider router={router}> 
        
      </RouterProvider>
    </OurAgentProvider>
  )
}

export default App
