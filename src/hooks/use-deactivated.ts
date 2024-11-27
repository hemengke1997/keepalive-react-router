import { useActiveChanged } from './use-active-changed'

/**
 * 进入缓存以及组件卸载时调用
 */
export function useDeactivated(callback: () => void) {
  useActiveChanged((active) => {
    if (!active) {
      callback()
    }
  })
}
