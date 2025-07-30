# Getting Started

`keepalive-react-router` is a route caching solution based on React Router DataAPI.

For more information about DataAPI, please refer to the [React Router documentation](https://reactrouter.com/6.28.0/route/route).

Using `KeepAlive` is very simple. Let's get started quickly.

## Install Dependencies

```bash
npm install keepalive-react-router react-router-dom
```

## Usage

First, you need to use React Router's [DataAPI route components](https://reactrouter.com/6.28.0/routers/picking-a-router#using-v64-data-apis)

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

Then, in the `Root` route, use `KeepAlive` and remove `Outlet`.

Note that `KeepAliveOutlet` must be wrapped in `KeepAliveProvider`.

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

Finally, define `keepAlive` in the route component!

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

Now, the `Dashboard` route component will be cached.

KeepAlive, it's that simple!

For more details, please refer to the [example](https://github.com/hemengke1997/keepalive-react-router/tree/master/playground/react-router).
