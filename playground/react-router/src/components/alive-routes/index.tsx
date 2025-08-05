import type { TabsProps } from 'antd'
import { App, Tabs } from 'antd'
import { useKeepAlive } from 'keepalive-react-router'
import { useNavigate } from 'react-router-dom'
import { findHandleByPathnameInRoutes, routes } from '../../router'

export default function AliveRoutes() {
  const { destroy, getAliveRoutes } = useKeepAlive()

  const tabs: TabsProps['items'] = getAliveRoutes().map((pathname) => {
    const current = findHandleByPathnameInRoutes(pathname, routes)
    return {
      key: pathname,
      label: current?.label,
    }
  })

  const { message } = App.useApp()
  const navigate = useNavigate()

  const onChange = (key: string) => {
    navigate(key)
  }

  const onEdit: TabsProps['onEdit'] = (targetKey, action) => {
    if (action === 'remove') {
      if (tabs.length > 1) {
        if (targetKey === location.pathname) {
          const index = tabs.findIndex(tab => tab.key === targetKey)
          navigate(tabs[index + 1]?.key as string || tabs[0]?.key as string)
        }
        destroy(targetKey as string)
      }
      else {
        message.error('至少保留一个标签页')
      }
    }
  }

  return (
    <div
      className='mb-4'
    >
      <Tabs
        hideAdd
        className='w-[calc(100%-110px)] h-30px py-0'
        items={[...tabs]}
        onChange={onChange}
        activeKey={location.pathname}
        type='editable-card'
        onEdit={onEdit}
      />
    </div>
  )
}
