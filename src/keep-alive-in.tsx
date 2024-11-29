import { useLocation, useMatches, useOutlet } from 'react-router-dom'
import { KeepAliveContext } from './contexts/keep-alive'
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect'
import OffScreen from './off-screen'
import OnScreen from './on-screen'

function KeepAliveIn() {
  const { aliveRoutes, setAliveRoutes } = KeepAliveContext.usePicker(['aliveRoutes', 'setAliveRoutes'])
  const outlet = useOutlet()
  const { pathname } = useLocation()
  const matches = useMatches()

  useIsomorphicLayoutEffect(() => {
    let shouldKeepAlive = false
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i]
      const handle = match.handle as { keepAlive: boolean } | undefined
      if (!handle) continue
      if (handle?.keepAlive) {
        shouldKeepAlive = true
        break
      }
    }

    const current = aliveRoutes.get(pathname)

    if (!current || current.shouldKeepAlive !== shouldKeepAlive) {
      setAliveRoutes(pathname, {
        component: shouldKeepAlive ? outlet : null,
        shouldKeepAlive,
      })
    }
  }, [pathname])

  return (
    <>
      {Array.from(aliveRoutes).map(([key, route]) =>
        route.shouldKeepAlive ? (
          <OffScreen key={key} pathname={key} mode={pathname === key ? 'visible' : 'hidden'}>
            {route.component}
          </OffScreen>
        ) : (
          <OnScreen key={key} mounted={pathname === key}>
            {outlet}
          </OnScreen>
        ),
      )}
    </>
  )
}

export default KeepAliveIn
