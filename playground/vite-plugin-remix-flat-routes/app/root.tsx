import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'
import { useRouteError } from 'react-router-dom'
import { App } from 'antd'
import { GlobalStore } from './stores/global-store'

function Inner() {
  const { enableScroll, enableTransition } = GlobalStore.useStore(['enableScroll', 'enableTransition'])
  return (
    <App>
      <KeepAliveOutlet transition={enableTransition} scrollRestoration={enableScroll ? {} : false} />
    </App>
  )
}

export function Component() {
  return (
    <KeepAliveProvider>
      <GlobalStore.Provider>
        <Inner />
      </GlobalStore.Provider>
    </KeepAliveProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.log(error)

  return <>Oops!</>
}
