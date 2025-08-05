# 路由动画

`keepalive-react-router` 支持路由切换动画，使用起来也很简单。

## 安装依赖

为了库体积优化，`keepalive-react-router` 并没有内置动画库，所以如果你需要路由动画时按需安装即可。

```bash
npm install react-transition-preset
```

## 使用

在 `KeepAliveOutlet` 组件中，添加 `transition` 属性，即可开启路由切换动画。

开启后，默认使用 `fade` 过渡效果。

```tsx
// root.tsx
import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'

export function Root() {
  return (
    <>
      <KeepAliveProvider>
        {/* [!code focus] */}
        <KeepAliveOutlet transition={true} />
      </KeepAliveProvider>
    </>
  )
}
```
`react-transition-preset` 内置了常用过渡效果，使用方便。

```tsx
<KeepAliveOutlet transition={{ transition: 'fade', duration: 0.3 }} />
```

更多配置请查看 [react-transition-preset](https://github.com/hemengke1997/react-transition-preset)
