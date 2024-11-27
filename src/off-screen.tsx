import { Suspense, useEffect, useRef } from 'react'
import { useMemoFn } from 'context-state'
import { useEventListener } from './hooks/use-event-listener'
import OffScreenIn, { type OffScreenInProps } from './off-screen-in'
import { RouteTransition } from './route-transition'

export default function OffScreen(props: OffScreenInProps) {
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

  useEffect(() => {
    if (mode === 'visible') {
      emitActiveChange()
    } else if (emitted.current) {
      // hidden
      emitActiveChange()
    }
  }, [mode])

  useEffect(() => {
    return () => {
      emitActiveChange()
    }
  }, [])

  return (
    <RouteTransition
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
