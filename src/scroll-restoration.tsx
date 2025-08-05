import type { GetScrollRestorationKeyFunction } from 'react-router-dom'
import type { KeepAliveOutletProps } from './keep-alive-outlet'
import { ScrollRestoration as RouterScrollRestoration } from 'react-router-dom'
import { KeepAliveStore } from './contexts/keep-alive'

export function ScrollRestoration(props: { scrollRestoration?: KeepAliveOutletProps['scrollRestoration'] }) {
  const { scrollRestoration } = props
  const { aliveRoutes } = KeepAliveStore.useStore(['aliveRoutes'])

  if (scrollRestoration === false) {
    return <RouterScrollRestoration getKey={location => location.key} />
  }

  const getKey: GetScrollRestorationKeyFunction = (location, matches) => {
    if (scrollRestoration?.getKey) {
      return scrollRestoration.getKey(location, matches)
    }
    const { pathname } = location
    const aliveRoute = aliveRoutes.get(pathname)
    if (aliveRoute?.shouldKeepAlive) {
      return pathname
    }
    return location.key
  }

  return <RouterScrollRestoration getKey={getKey} storageKey={scrollRestoration?.storageKey} />
}
