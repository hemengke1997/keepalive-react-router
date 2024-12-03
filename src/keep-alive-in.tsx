import { useLocation, useMatches, useOutlet } from 'react-router-dom'
import { KeepAliveContext } from './contexts/keep-alive'
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect'
import OffScreen from './off-screen'
import OnScreen from './on-screen'

function KeepAliveIn() {
  const { aliveRoutes, setAliveRoutes } = KeepAliveContext.usePicker(['aliveRoutes', 'setAliveRoutes'])
  const outlet = useOutlet()
  const location = useLocation()
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

    setAliveRoutes(location.pathname, {
      key: location.key,
      shouldKeepAlive,
    })
  }, [location.pathname, location.key])

  return (
    <>
      {Array.from(aliveRoutes).map(([pathname, route]) =>
        route.shouldKeepAlive ? (
          <OffScreen key={route.key} pathname={pathname} mode={location.pathname === pathname ? 'visible' : 'hidden'}>
            {outlet}
          </OffScreen>
        ) : (
          <OnScreen key={route.key} mounted={location.pathname === pathname}>
            {outlet}
          </OnScreen>
        ),
      )}
    </>
  )
}

export default KeepAliveIn
