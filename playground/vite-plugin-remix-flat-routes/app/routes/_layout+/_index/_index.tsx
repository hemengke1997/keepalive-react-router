import { useActivated, useDeactivated } from 'keepalive-react-router'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { App, Button, Card, Modal, Space } from 'antd'
import LoadMore from '../../../components/load-more'
import { GlobalStore } from '../../../stores/global-store'

export const handle = {
  keepAlive: true,
}

export default function Page() {
  const { message } = App.useApp()

  const [count, setCount] = useState(0)
  const { globalCount, setGlobalCount } = GlobalStore.useStore(['globalCount', 'setGlobalCount'])

  console.log('index --- render')

  useActivated(() => {
    message.info('首页激活！')
  })

  useDeactivated(() => {
    message.info('首页失活！')
  })

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={'min-h-screen'}>
      <Card title={'首页 KeepAlive'}>
        <div className={'mb-6 flex gap-2'}>
          <Button
            onClick={() => {
              setCount(count + 1)
            }}
          >
            触发渲染 {count}
          </Button>
          <Button onClick={() => setModalOpen(true)}>打开modal</Button>
          <Button
            onClick={() => {
              setGlobalCount((t) => t + 1)
            }}
          >
            GlobalCount: {globalCount}
          </Button>
        </div>
        <LoadMore />
      </Card>
      <Modal
        open={modalOpen}
        title={'首页'}
        onCancel={() => {
          setModalOpen(false)
        }}
        footer={null}
      >
        <Space>
          <Link to='/signin'>
            <Button>跳转登录</Button>
          </Link>
          <Link to='/signup'>
            <Button>跳转注册</Button>
          </Link>
        </Space>
      </Modal>
    </div>
  )
}
