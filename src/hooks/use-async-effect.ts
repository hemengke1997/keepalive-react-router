import { type DependencyList, useEffect } from 'react'
import { isFunction } from '../utils'

function isAsyncGenerator(
  val: AsyncGenerator<void, void, void> | Promise<void>,
): val is AsyncGenerator<void, void, void> {
  return isFunction(val[Symbol.asyncIterator])
}

export function useAsyncEffect(effect: () => AsyncGenerator<void, void, void> | Promise<void>, deps?: DependencyList) {
  useEffect(() => {
    const e = effect()
    let cancelled = false
    async function execute() {
      if (isAsyncGenerator(e)) {
        while (true) {
          const result = await e.next()
          if (result.done || cancelled) {
            break
          }
        }
      } else {
        await e
      }
    }
    execute()
    return () => {
      cancelled = true
    }
  }, deps)
}
