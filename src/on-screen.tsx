import type { ReactNode } from 'react'
import { RouteTransition } from './route-transition'

export default function OnScreen(props: { pathname: string, mounted: boolean, children: ReactNode }) {
  const { pathname, mounted, children } = props

  return (
    <RouteTransition
      pathname={pathname}
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
