import { useState } from 'react'
import { useActivated } from './use-activated'

/**
 * 用于强制重新渲染组件
 */
export function useKey() {
  const [key, setKey] = useState(0)

  useActivated(() => {
    setKey((prev) => ~prev)
  })

  return key
}
