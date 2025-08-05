import type { OffScreenInProps } from './off-screen-in'
import { useMemoFn } from 'context-state'
import { Suspense, useRef } from 'react'
import { useEventListener } from './hooks/use-event-listener'
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect'
import OffScreenIn from './off-screen-in'
import { RouteTransition } from './route-transition'

export default function OffScreen(
  props: OffScreenInProps & {
    pathname: string
  },
) {
  const { mode, pathname } = props

  const { eventListener } = useEventListener()

  const emitted = useRef(false)

  const emitActiveChange = useMemoFn(() => {
    eventListener.emit('activeChange', {
      pathname,
      mode,
      callback() {
        emitted.current = true
      },
    })
  })

  useIsomorphicLayoutEffect(() => {
    if (mode === 'visible') {
      emitActiveChange()
    }
    else if (emitted.current) {
      // hidden
      emitActiveChange()
    }
  }, [mode])

  useIsomorphicLayoutEffect(() => {
    return () => {
      emitActiveChange()
    }
  }, [])

  return (
    <RouteTransition
      pathname={pathname}
      mounted={mode === 'visible'}
      transition={{
        keepMounted: true,
        unsafe_alwaysMounted: true,
        // Lazy transition workaround
        onEnter() {
          if (!emitted.current) {
            emitActiveChange()
          }
        },
      }}
    >
      <Suspense fallback={null}>
        <OffScreenIn {...props} />
      </Suspense>
    </RouteTransition>
  )
}
