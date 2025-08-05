import type React from 'react'
import type { KeepAliveOutletProps } from './keep-alive-outlet'
import { lazy, Suspense } from 'react'
import { KeepAliveInStore } from './contexts/keep-alive-in'
import { isObject } from './utils'

const LazyTransition = lazy(() => import('react-transition-preset').then(module => ({ default: module.Transition })))

export function RouteTransition(props: {
  children: React.ReactNode
  mounted: boolean
  transition: Exclude<KeepAliveOutletProps['transition'], boolean>
  pathname: string
}) {
  const { transition } = KeepAliveInStore.useStore(['transition'])
  const { children, mounted, transition: transitionProps, pathname } = props

  if (!transition) {
    if (transitionProps?.keepMounted) {
      return children
    }
    return mounted ? children : null
  }

  const transitionInput = isObject(transition) ? transition : {}

  return (
    <Suspense>
      <LazyTransition
        initial={true}
        duration={0.2}
        transition='fade'
        {...transitionInput}
        {...transitionProps}
        onEnter={() => {
          transitionProps?.onEnter?.()
          transitionInput?.onEnter?.()
        }}
        exitDuration={0}
        mounted={mounted}
      >
        {(style: React.CSSProperties) => <div style={style}>{children}</div>}
      </LazyTransition>
    </Suspense>
  )
}
