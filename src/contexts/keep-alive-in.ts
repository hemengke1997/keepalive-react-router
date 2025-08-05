import type { KeepAliveOutletProps } from '../keep-alive-outlet'
import { createStore } from 'context-state'

function useKeepAliveIn(initialValue: Pick<KeepAliveOutletProps, 'transition'>) {
  const { transition } = initialValue

  return {
    transition,
  }
}

export const KeepAliveInStore = createStore(useKeepAliveIn)
