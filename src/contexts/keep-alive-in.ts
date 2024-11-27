import { createContainer } from 'context-state'
import { type KeepAliveProps } from '../keep-alive'

function useKeepAliveIn(initialValue: Pick<KeepAliveProps, 'transition'>) {
  const { transition } = initialValue

  return {
    transition,
  }
}

export const KeepAliveInContext = createContainer(useKeepAliveIn)
