import { useRef } from 'react'
import { useMemoFn } from 'context-state'
import { type MapValue } from 'type-fest/source/entry'

export function useMapRef<T extends Map<string, any>>(initialValue: T) {
  const ref = useRef<T>(initialValue)

  const mapSetRef = useMemoFn((key: string, value: Partial<MapValue<T>>) => {
    ref.current.set(key, {
      ...ref.current.get(key),
      ...value,
    })
  })

  const mapDeleteRef = useMemoFn((keys: string[]) => {
    keys.forEach((key) => {
      ref.current.delete(key)
    })
  })

  return [ref, { mapSetRef, mapDeleteRef }] as const
}
