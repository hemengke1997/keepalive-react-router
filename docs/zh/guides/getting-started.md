# 快速开始

`keepalive-react-router` 是一个基于 React Router DataAPI 的路由的缓存解决方案。

关于 DataAPI，请查看 [React Router 文档](https://reactrouter.com/6.28.0/route/route)。

`KeepAlive` 的使用非常简单，接下来我将带领您快速上手。

## 安装依赖

```bash
npm install keepalive-react-router react-router-dom
```

## 使用

首先，需要使用 React Router 的 [DataAPI 路由组件](https://reactrouter.com/6.28.0/routers/picking-a-router#using-v64-data-apis)

```tsx
// main.tsx
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="dashboard" element={<Dashboard />} />
      {/* ... etc. */}
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
```

然后，在 `Root` 根路由中，使用 `KeepAliveOutlet`，并且移除 `Ouelet`。

需要注意的是，`KeepAliveOutlet` 必须包裹在 `KeepAliveProvider` 中。

```tsx
// root.tsx
import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'

export function Root() {
  return (
    <>
      {/* [!code --] */}
      <Outlet />
      {/* [!code ++] */}
      <KeepAliveProvider>
        {/* [!code ++] */}
        <KeepAliveOutlet />
        {/* [!code ++] */}
      </KeepAliveProvider>
    </>
  )
}
```

最后，我们在路由组件中定义 `keepAlive` 即可！

```tsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route
        path="dashboard" 
        element={<Dashboard />} 
        handle={{ keepAlive: true }} // [!code ++]
      />
      {/* ... etc. */}
    </Route>
  )
)
```

现在，`Dashboard` 路由组件就会被缓存了。

KeepAlive，就是这么简单！

更多详情请参照 [示例](https://github.com/hemengke1997/keepalive-react-router/tree/master/playground/react-router)
