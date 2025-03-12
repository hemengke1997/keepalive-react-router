import { useState } from 'react'
import { createStore } from 'context-state'

function useGlobal() {
  const [globalCount, setGlobalCount] = useState(0)

  return {
    globalCount,
    setGlobalCount,
  }
}

export const GlobalStore = createStore(useGlobal)
