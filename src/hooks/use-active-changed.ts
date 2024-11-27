import { useLocation } from 'react-router-dom'
import { useEventListener } from './use-event-listener'

export function useActiveChanged(fn: (active: boolean) => void) {
  const { pathname: activePathname } = useLocation()

  useEventListener({
    on: {
      activeChange: ({ pathname, mode, callback }) => {
        if (pathname === activePathname) {
          const active = mode === 'visible'
          fn(active)
        }
        callback?.()
      },
    },
  })
}
