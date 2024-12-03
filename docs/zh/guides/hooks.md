# Hooks

我们提供了一些 React Hook，便于您更灵活地控制路由缓存和生命周期。

## useActivated

- **类型**: `function useActivated(callback: () => void): void`

注册一个回调函数，若路由是 `KeepAlive`，则在首次挂载和从缓存中激活时调用。时机与 `Vue` 的 `onActivated` 相同。

```tsx
import { useActivated } from 'keepalive-react-router'

export default function Page() {
  useActivated(() => {
    // 调用时机为首次挂载
    // 以及每次从缓存中激活时
  })
}
```

## useDeactivated

- **类型**: `function useDeactivated(callback: () => void): void`

注册一个回调函数，若路由是 `KeepAlive`，则在路由卸载和进入缓存时调用。时机与 `Vue` 的 `onDeactivated` 相同。

```tsx
import { useDeactivated } from 'keepalive-react-router'

export default function Page() {
  useDeactivated(() => {
    // 调用时机为路由卸载
    // 以及进入缓存时
  })
}
```

## useKeepAlive

`useKeepAlive` 获取路由缓存和控制缓存。

```tsx
import { useKeepAlive } from 'keepalive-react-router'

export default function Page() {
  const { destory, destroyAll, getAliveRoutes } = useKeepAlive()
}
```

#### destory

- **类型**: `(pathname: string | string[]) => void`

销毁指定路由缓存。

#### destroyAll

- **类型**: `() => void`

销毁所有路由缓存。如果当前路由是 `KeepAlive` 路由，则不会销毁当前路由。

#### getAliveRoutes

- **类型**: `() => string[]`

获取所有缓存的路由。

## useKey

- **类型**: `function useKey(): string`

返回一个变化的`key`，用于刷新组件。由于 `KeepAlive` 会缓存路由快照，因此失活时，如果路由中有组件动画，则会导致激活时动画重新执行的问题。

使用 `useKey`，会在缓存激活时，重新渲染组件，从而解决动画问题。

```tsx
import { useKey } from 'keepalive-react-router'

export default function Page() {
  const key = useKey()

  return <div key={key}>Component</div>
}
```
