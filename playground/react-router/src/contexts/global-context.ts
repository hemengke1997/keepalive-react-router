import { useState } from 'react'
import { createContainer } from 'context-state'

function useGlobalContext() {
  const [globalCount, setGlobalCount] = useState(0)

  return {
    globalCount,
    setGlobalCount,
  }
}

export const GlobalContext = createContainer(useGlobalContext)
