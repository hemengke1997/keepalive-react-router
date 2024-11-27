import { useRouteError } from 'react-router-dom'
import { App } from 'antd'
import { KeepAlive, KeepAliveProvider } from 'keepalive-react-router'
import { GlobalContext } from './contexts/global-context'

export function Component() {
  return (
    <KeepAliveProvider>
      <GlobalContext.Provider>
        <GlobalContext.Consumer>
          {({ enableScroll, enableTransition }) => (
            <>
              <App>
                <KeepAlive transition={enableTransition} scrollRestoration={enableScroll ? {} : false} />
              </App>
            </>
          )}
        </GlobalContext.Consumer>
      </GlobalContext.Provider>
    </KeepAliveProvider>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.log(error)

  return <>Oops!</>
}
