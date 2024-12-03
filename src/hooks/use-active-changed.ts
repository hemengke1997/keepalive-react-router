import { useLocation } from 'react-router-dom'
import { useEventListener } from './use-event-listener'

export function useActiveChanged(fn: (active: boolean) => void) {
  const location = useLocation()
  useEventListener({
    on: {
      activeChange: ({ pathname, mode, callback }) => {
        if (pathname === location.pathname) {
          const active = mode === 'visible'
          fn(active)
        }
        callback?.()
      },
    },
  })
}
