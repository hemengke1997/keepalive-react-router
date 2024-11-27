import { useState } from 'react'
import { useMemoFn } from 'context-state'
import { type MapValue } from 'type-fest/source/entry'

export function useMapState<S extends Map<string, any>>(initialState: S | (() => S)) {
  const [state, setState] = useState(initialState)

  const mapSetState = useMemoFn((key: string, value: Partial<MapValue<S>>) => {
    setState((state) => {
      const nextState = new Map(state)
      nextState.set(key, {
        ...state.get(key),
        ...value,
      })
      return nextState as S
    })
  })

  const mapDeleteState = useMemoFn((keys: string[]) => {
    setState((state) => {
      const nextState = new Map(state)
      keys.forEach((key) => {
        nextState.delete(key)
      })
      return nextState as S
    })
  })

  return [state, { mapDeleteState, mapSetState }] as const
}
