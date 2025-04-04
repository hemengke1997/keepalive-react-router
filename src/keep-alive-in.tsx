import { useLocation, useMatches, useOutlet } from 'react-router-dom'
import { KeepAliveStore } from './contexts/keep-alive'
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect'
import OffScreen from './off-screen'
import OnScreen from './on-screen'

function KeepAliveIn() {
  const { aliveRoutes, setAliveRoutes } = KeepAliveStore.useStore(['aliveRoutes', 'setAliveRoutes'])
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
      shouldKeepAlive,
    })
  }, [location.pathname, location.key])

  return (
    <>
      {Array.from(aliveRoutes).map(([pathname, route]) =>
        route.shouldKeepAlive ? (
          <OffScreen key={pathname} pathname={pathname} mode={location.pathname === pathname ? 'visible' : 'hidden'}>
            {outlet}
          </OffScreen>
        ) : (
          <OnScreen key={pathname} mounted={location.pathname === pathname}>
            {outlet}
          </OnScreen>
        ),
      )}
    </>
  )
}

export default KeepAliveIn
