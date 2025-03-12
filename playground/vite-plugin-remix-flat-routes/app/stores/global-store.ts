import { useState } from 'react'
import { createStore } from 'context-state'

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
