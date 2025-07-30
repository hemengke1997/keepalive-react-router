# vite-plugin-remix-flat-routes

[`vite-plugin-remix-flat-routes`](https://hemengke1997.github.io/vite-plugin-remix-flat-routes/) is a convention-based routing vite plugin that provides Remix-style React file system routing.

When used with `keepalive-react-router`, it makes it easier to implement route caching and route lazy loading!

## Usage

For basic usage, please refer to [Getting Started](https://hemengke1997.github.io/vite-plugin-remix-flat-routes/guides/getting-started.html).

After integrating `vite-plugin-remix-flat-routes`, we only need a few simple steps:

### Root Component

We still need to introduce `KeepAlive` in the `Root` component and remove `Outlet`.

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

### Route Component

In the route component, export `keepAlive` to enable route caching.

```tsx
// Route Component

export const handle = { keepAlive: true }

export default function Page() {
  return <div>Page</div>
}
```

It's that simple.

For more details, please refer to the [example](https://github.com/hemengke1997/keepalive-react-router/tree/master/playground/vite-plugin-remix-flat-routes).
