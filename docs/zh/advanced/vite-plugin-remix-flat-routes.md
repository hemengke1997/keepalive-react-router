# vite-plugin-remix-flat-routes

[`vite-plugin-remix-flat-routes`](https://hemengke1997.github.io/vite-plugin-remix-flat-routes/zh/) 是一个约定式路由 vite 插件，提供了 Remix 风格的 React 文件系统路由

配合 `keepalive-react-router` 使用，可以更加方便实现路由缓存和路由懒加载等！

## 使用

基本使用请参照 [快速上手](https://hemengke1997.github.io/vite-plugin-remix-flat-routes/zh/guides/getting-started.html)。

接入了 `vite-plugin-remix-flat-routes` 后，我们只需要简单几步即可：

### Root 根组件

我们仍然需要在 `Root` 中引入 `KeepAlive`，并且移除 `Outlet`。

```tsx
// root.tsx
import { KeepAlive, KeepAliveProvider } from 'keepalive-react-router'

export function Root() {
  return (
    <>
      <Outlet /> // [!code --]
      <KeepAliveProvider> // [!code ++]
        <KeepAlive /> // [!code ++]
      </KeepAliveProvider> // [!code ++]
    </>
  )
}
```

### 路由组件

在路由组件中，导出 `keepAlive` 即可开启路由缓存。

```tsx
// 路由组件

export const handle = { keepAlive: true }

export default function Page() {
  return <div>Page</div>
}
```

就这么简单。

更多详情请参照 [示例](https://github.com/hemengke1997/keepalive-react-router/tree/master/playground/vite-plugin-remix-flat-routes)
