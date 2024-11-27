import { type GetScrollRestorationKeyFunction, ScrollRestoration as RouterScrollRestoration } from 'react-router-dom'
import { KeepAliveContext } from './contexts/keep-alive'
import { type KeepAliveProps } from './keep-alive'

export function ScrollRestoration(props: { scrollRestoration?: KeepAliveProps['scrollRestoration'] }) {
  const { scrollRestoration } = props
  const { aliveRoutes } = KeepAliveContext.usePicker(['aliveRoutes'])

  if (scrollRestoration === false) {
    return <RouterScrollRestoration getKey={(location) => location.key} />
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
