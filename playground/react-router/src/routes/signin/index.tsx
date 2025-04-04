import { useActivated, useDeactivated, useKeepAlive } from 'keepalive-react-router'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button, Card, Space } from 'antd'
import { GlobalStore } from '../../stores/global-store'

export default function Signin() {
  const [count, setCount] = useState(0)

  const { globalCount, setGlobalCount } = GlobalStore.useStore(['globalCount', 'setGlobalCount'])

  console.log('signin --- render')

  useActivated(() => {
    console.log('signin --- actived')
  })

  useDeactivated(() => {
    console.log('signin --- deactived')
  })

  const { destroyAll } = useKeepAlive()

  return (
    <div className={'min-h-screen'}>
      <Card title={'登录页 KeepAlive'}>
        <Space>
          <Button
            onClick={() => {
              setCount(count + 1)
            }}
          >
            点击count+ {count}
          </Button>

          <Button onClick={() => destroyAll()}>清除所有路由缓存</Button>
          <Button onClick={() => setGlobalCount((t) => t - 1)}>GlobalCount: {globalCount}</Button>
        </Space>
      </Card>
      <Outlet />
    </div>
  )
}

export const handle = {
  keepAlive: true,
}
