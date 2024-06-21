import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppRoutes from './utils/AppRoutes';
import { Toaster } from 'react-hot-toast';

function App() {
  const router = createBrowserRouter(AppRoutes)
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    <Toaster />

    </>
  )
}

export default App
