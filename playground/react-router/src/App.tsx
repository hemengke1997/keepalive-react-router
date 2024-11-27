import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Index from './routes/index'
import Root from './routes/root'
import Signin from './routes/signin'
import Signup from './routes/signup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Index />,
        handle: {
          keepAlive: true,
        },
      },
      {
        path: '/signin',
        element: <Signin />,
        handle: {
          keepAlive: true,
        },
      },
      {
        path: '/signup',
        element: <Signup />,
      },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
