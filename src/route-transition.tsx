import type React from 'react'
import { lazy, Suspense } from 'react'
import { KeepAliveInContext } from './contexts/keep-alive-in'
import { type KeepAliveProps } from './keep-alive'
import { isObject } from './utils'

const LazyTransition = lazy(() => import('react-transition-preset').then((module) => ({ default: module.Transition })))

export function RouteTransition(props: {
  children: React.ReactNode
  mounted: boolean
  transition: Exclude<KeepAliveProps['transition'], boolean>
}) {
  const { transition } = KeepAliveInContext.usePicker(['transition'])
  const { children, mounted, transition: transitionProps } = props

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
        duration={200}
        transition={'fade-right'}
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
