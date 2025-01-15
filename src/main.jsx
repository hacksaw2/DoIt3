import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Today from './Today.jsx'
import Signup from './Signup.jsx'

// Routing
const router = createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<App />}>

      {/* default page for the site */}
      <Route index element={<Today />} />


      <Route path='/today' element={<Today />} />
      <Route path='/signup' element={<Signup />} />
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
