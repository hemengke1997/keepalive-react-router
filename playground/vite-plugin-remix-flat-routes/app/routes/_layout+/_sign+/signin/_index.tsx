import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { App, Button, Card, Space } from 'antd'
import { useActivated, useDeactivated } from 'keepalive-react-router'
import { GlobalContext } from '../../../../contexts/global-context'

export default function Page() {
  const { message } = App.useApp()

  const [count, setCount] = useState(0)

  const { globalCount, setGlobalCount } = GlobalContext.usePicker(['globalCount', 'setGlobalCount'])

  console.log('signin --- render')

  useActivated(() => {
    message.info('登录页激活！')
  })

  useDeactivated(() => {
    message.info('登录页失活！')
  })

  return (
    <div className={'min-h-screen'}>
      <Card title={'登录页 KeepAlive'}>
        <Space>
          <Button
            onClick={() => {
              setCount(count + 1)
            }}
          >
            触发渲染 {count}
          </Button>

          <Button onClick={() => setGlobalCount((t) => t + 1)}>GlobalCount: {globalCount}</Button>
        </Space>
      </Card>
      <Outlet />
    </div>
  )
}

export const handle = {
  keepAlive: true,
}
