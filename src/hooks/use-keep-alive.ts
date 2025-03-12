import { useLocation } from 'react-router-dom'
import { useMemoFn } from 'context-state'
import { KeepAliveStore } from '../contexts/keep-alive'
import { ensureArray } from '../utils'
import { useEventListener } from './use-event-listener'
import { useUpdate } from './use-update'

export function useKeepAlive() {
  const { aliveRoutes, deleteAliveRoutes } = KeepAliveStore.useStore(['aliveRoutes', 'deleteAliveRoutes'])

  const { pathname } = useLocation()

  const update = useUpdate()

  useEventListener({
    on: {
      activeChange: () => {
        update()
      },
    },
  })

  const destroy = useMemoFn((pathname: string | string[]) => {
    pathname = ensureArray(pathname)
    deleteAliveRoutes(pathname)
  })

  const destroyAll = useMemoFn(() => {
    const diff = getAliveRoutes().filter((t) => t !== pathname)
    deleteAliveRoutes(diff)
  })

  const getAliveRoutes = useMemoFn(() =>
    Array.from(aliveRoutes.entries())
      .filter(([, route]) => route.shouldKeepAlive)
      .map(([pathname]) => pathname),
  )

  return {
    destroy,
    destroyAll,
    getAliveRoutes,
  }
}
