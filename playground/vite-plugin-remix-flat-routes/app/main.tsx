import { ConfigProvider, theme } from 'antd'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from 'virtual:remix-flat-routes'
import './css/index.css'

createRoot(document.querySelector('#root')!).render(
  <ConfigProvider
    theme={{
      cssVar: true,
      algorithm: [theme.darkAlgorithm],
    }}
  >
    <RouterProvider router={createBrowserRouter(routes)} />
  </ConfigProvider>,
)
