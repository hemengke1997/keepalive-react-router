import { type ReactNode } from 'react'
import { RouteTransition } from './route-transition'

export function OnScreen(props: { mounted: boolean; children: ReactNode }) {
  const { mounted, children } = props

  return (
    <RouteTransition
      mounted={mounted}
      transition={{
        keepMounted: false,
      }}
      key={JSON.stringify(mounted)}
    >
      {children}
    </RouteTransition>
  )
}
