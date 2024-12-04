# Route Transition

`keepalive-react-router` supports route transition animations, and it is very simple to use.

## Install Dependencies

For library size optimization, `keepalive-react-router` does not include an animation library by default. So if you need route animations, you can install it as needed.

```bash
npm install react-transition-preset
```

## Usage

In the `KeepAliveOutlet` component, add the `transition` attribute to enable route transition animations.

Once enabled, the default transition effect is `fade-right`.

```tsx
// root.tsx
import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'

export function Root() {
  return (
    <>
      <KeepAliveProvider>
        <KeepAliveOutlet transition={true} /> // [!code focus]
      </KeepAliveProvider>
    </>
  )
}
```
`react-transition-preset` comes with built-in common transition effects, making it easy to use.

```tsx
<KeepAliveOutlet transition={{ transition: 'fade', duration: 300 }} /> 
```

For more configurations, please refer to [react-transition-preset](https://github.com/hemengke1997/react-transition-preset)
