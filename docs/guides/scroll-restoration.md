# Scroll Restoration

`keepalive-react-router` supports caching the scroll positions of route components to provide a better user experience. It is enabled by default.

You can also control the scroll restoration behavior.

```tsx
import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'

export function Root() {
  return (
    <>
      <KeepAliveProvider>
        <KeepAliveOutlet 
          scrollRestoration={
            // Custom scroll restoration behavior
          }
        />
      </KeepAliveProvider>
    </>
  )
}
```

For the `scrollRestoration` API, please refer to `React Router` [ScrollRestoration](https://reactrouter.com/6.28.0/components/scroll-restoration)
