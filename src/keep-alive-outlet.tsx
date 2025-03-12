import { type ScrollRestorationProps } from 'react-router-dom'
import { type TransitionProps } from 'react-transition-preset'
import { KeepAliveInStore } from './contexts/keep-alive-in'
import KeepAliveIn from './keep-alive-in'
import { ScrollRestoration } from './scroll-restoration'

export type KeepAliveOutletProps = {
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

export function KeepAliveOutlet(props: KeepAliveOutletProps) {
  const { transition = false, scrollRestoration, children } = props

  return (
    <>
      <KeepAliveInStore.Provider transition={transition}>
        <KeepAliveIn />
        <ScrollRestoration scrollRestoration={scrollRestoration} />
        {children}
      </KeepAliveInStore.Provider>
    </>
  )
}
