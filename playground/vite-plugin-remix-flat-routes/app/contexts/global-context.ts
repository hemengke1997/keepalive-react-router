import { useState } from 'react'
import { createContainer } from 'context-state'

function useGlobalContext() {
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

export const GlobalContext = createContainer(useGlobalContext)
