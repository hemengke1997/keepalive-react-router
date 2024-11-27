import { type ScrollRestorationProps } from 'react-router-dom'
import { type TransitionProps } from 'react-transition-preset'
import { KeepAliveInContext } from './contexts/keep-alive-in'
import KeepAliveIn from './keep-alive-in'
import { ScrollRestoration } from './scroll-restoration'

export type KeepAliveProps = {
  children?: React.ReactNode
  /**
   * @description Route transition
   * @see react-transition-preset
   * @default false
   */
  transition?: Omit<TransitionProps, 'children' | 'mounted'> | boolean
  /**
   * @description Scroll restoration
   */
  scrollRestoration?: ScrollRestorationProps | false
}

export function KeepAlive(props: KeepAliveProps) {
  const { transition = false, scrollRestoration, children } = props

  return (
    <>
      <KeepAliveInContext.Provider
        value={{
          transition,
        }}
      >
        <KeepAliveIn />
        <ScrollRestoration scrollRestoration={scrollRestoration} />
        {children}
      </KeepAliveInContext.Provider>
    </>
  )
}
