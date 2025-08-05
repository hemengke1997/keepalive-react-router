import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { routes } from './router'

const router = createBrowserRouter(routes)

const App: React.FC = () => {
  return <RouterProvider router={router} />
}

export default App
