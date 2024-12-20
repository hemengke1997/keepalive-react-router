import { useRef } from 'react'
import type { ReactNode } from 'react'
import { useMemoFn } from 'context-state'
import { useIsomorphicLayoutEffect } from './hooks/use-isomorphic-layout-effect'
import { type ActivityMode } from './types'

export type OffScreenInProps = {
  mode: ActivityMode
  children: ReactNode
}

export default function OffScreenIn(props: OffScreenInProps) {
  const { mode, children } = props

  const promiseRef = useRef<Promise<void> | null>(null)
  const resolveRef = useRef<(() => void) | null>(null)
  const resolvePromise = useMemoFn((ignoreMode?: boolean) => {
    if ((ignoreMode || mode === 'visible') && typeof resolveRef.current === 'function') {
      resolveRef.current()
      resolveRef.current = null
      promiseRef.current = null
    }
  })

  useIsomorphicLayoutEffect(() => () => resolvePromise(true), [])

  if (mode === 'hidden') {
    if (resolveRef.current === null) {
      promiseRef.current = new Promise<void>((resolve) => (resolveRef.current = resolve))
    }

    const promise = promiseRef.current!
    throw promise
  }

  resolvePromise()

  return children
}
