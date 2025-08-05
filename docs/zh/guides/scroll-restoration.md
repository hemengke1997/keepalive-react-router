# 滚动恢复

`keepalive-react-router` 支持缓存路由组件滚动位置，以提供更好的用户体验。默认启用。

你也可以控制滚动恢复行为

```tsx
import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'

export function Root() {
  return (
    <>
      <KeepAliveProvider>
        <KeepAliveOutlet
          scrollRestoration={
            // 自定义滚动恢复行为
          }
        />
      </KeepAliveProvider>
    </>
  )
}
```

`scrollRestoration` API，请参考 `React Router` [ScrollRestoration](https://reactrouter.com/6.28.0/components/scroll-restoration)
