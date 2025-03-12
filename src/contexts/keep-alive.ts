import { createStore } from 'context-state'
import { useMapState } from '../hooks/use-map-state'

function useKeepAlive() {
  const [aliveRoutes, { mapSetState: setAliveRoutes, mapDeleteState: deleteAliveRoutes }] = useMapState<
    Map<
      string,
      {
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

export const KeepAliveStore = createStore(useKeepAlive)

export const KeepAliveProvider = KeepAliveStore.Provider
