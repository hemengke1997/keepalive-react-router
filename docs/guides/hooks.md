# Hooks

We provide some React Hooks to help you control route caching and lifecycle more flexibly.

## useActivated

- **Type**: `function useActivated(callback: () => void): void`

Registers a callback function that is called when the route is `KeepAlive`, both on the first mount and when reactivated from the cache. The timing is the same as Vue's `onActivated`.

```tsx
import { useActivated } from 'keepalive-react-router'

export default function Page() {
  useActivated(() => {
    // Called on the first mount
    // and each time it is reactivated from the cache
  })
}
```

## useDeactivated

- **Type**: `function useDeactivated(callback: () => void): void`

Registers a callback function that is called when the route is `KeepAlive`, both when the route is unmounted and when it enters the cache. The timing is the same as Vue's `onDeactivated`.

```tsx
import { useDeactivated } from 'keepalive-react-router'

export default function Page() {
  useDeactivated(() => {
    // Called when the route is unmounted
    // and when it enters the cache
  })
}
```

## useKeepAlive

`useKeepAlive` gets and controls route caching.

```tsx
import { useKeepAlive } from 'keepalive-react-router'

export default function Page() {
  const { destroy, destroyAll, getAliveRoutes } = useKeepAlive()
}
```

#### destroy

- **Type**: `(pathname: string | string[]) => void`

Destroys the specified route cache.

#### destroyAll

- **Type**: `() => void`

Destroys all route caches. If the current route is a `KeepAlive` route, it will not destroy the current route.

#### getAliveRoutes

- **Type**: `() => string[]`

Gets all cached routes.