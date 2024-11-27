import { useActiveChanged } from './use-active-changed'

/**
 * 调用时机为首次挂载
 * 以及每次从缓存中被重新插入时
 */
export function useActivated(callback: () => void) {
  useActiveChanged((active) => {
    if (active) {
      callback()
    }
  })
}
