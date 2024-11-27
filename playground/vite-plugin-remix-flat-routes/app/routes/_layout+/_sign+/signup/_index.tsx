import { useEffect, useState } from 'react'
import { App, Button, Card, Space } from 'antd'
import { GlobalContext } from '../../../../contexts/global-context'

export default function Page() {
  const { message } = App.useApp()

  const [count, setCount] = useState(0)

  const { globalCount, setGlobalCount } = GlobalContext.usePicker(['globalCount', 'setGlobalCount'])

  console.log('signup --- render')

  useEffect(() => {
    message.info('注册页重新加载')
    return () => {
      message.info('注册页卸载')
    }
  }, [])

  return (
    <div className={'min-h-screen'}>
      <Card title={'注册页 非KeepAlive'}>
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
    </div>
  )
}
