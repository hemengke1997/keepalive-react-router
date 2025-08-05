import { createStore } from 'context-state'
import { useState } from 'react'

function useGlobal() {
  const [globalCount, setGlobalCount] = useState(0)

  const [enableScroll, setEnableScroll] = useState(true)
  const [enableTransition, setEnableTransition] = useState(true)

  return {
    globalCount,
    setGlobalCount,
    enableScroll,
    setEnableScroll,
    enableTransition,
    setEnableTransition,
  }
}

export const GlobalStore = createStore(useGlobal)
