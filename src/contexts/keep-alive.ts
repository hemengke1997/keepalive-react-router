import { createContainer } from 'context-state'
import { useMapState } from '../hooks/use-map-state'

function useKeepAlive() {
  const [aliveRoutes, { mapSetState: setAliveRoutes, mapDeleteState: deleteAliveRoutes }] = useMapState<
    Map<
      string,
      {
        component: React.ReactElement | null
        shouldKeepAlive: boolean
      }
    >
  >(new Map())

  return {
    aliveRoutes,
    setAliveRoutes,
    deleteAliveRoutes,
  }
}

export const KeepAliveContext = createContainer(useKeepAlive)

export const KeepAliveProvider = KeepAliveContext.Provider
