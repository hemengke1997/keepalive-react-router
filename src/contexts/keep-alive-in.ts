import { createContainer } from 'context-state'
import { type KeepAliveOutletProps } from '../keep-alive-outlet'

function useKeepAliveIn(initialValue: Pick<KeepAliveOutletProps, 'transition'>) {
  const { transition } = initialValue

  return {
    transition,
  }
}

export const KeepAliveInContext = createContainer(useKeepAliveIn)
