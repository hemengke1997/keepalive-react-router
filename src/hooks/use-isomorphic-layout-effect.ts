import { useEffect, useLayoutEffect } from 'react'

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined'

export const useIsomorphicLayoutEffect = isBrowser ? useLayoutEffect : useEffect
