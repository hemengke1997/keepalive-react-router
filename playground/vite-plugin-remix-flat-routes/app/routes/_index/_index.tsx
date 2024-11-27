import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card, Modal, Space } from 'antd'
import { useActivated, useDeactivated, useKeepAlive } from 'keepalive-react-router'
import LoadMore from '../../components/load-more'
import { GlobalContext } from '../../contexts/global-context'

export const handle = {
  keepAlive: true,
}

export default function Page() {
  const [count, setCount] = useState(0)

  const { globalCount, setGlobalCount } = GlobalContext.usePicker(['globalCount', 'setGlobalCount'])
  const { getAliveRoutes, destroyAll } = useKeepAlive()

  console.log('index --- render')

  useActivated(() => {
    console.log('index --- actived')
  })

  useDeactivated(() => {
    console.log('index --- deactived')
  })

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className={'h-screen'}>
      <Card title={'首页 KeepAlive'}>
        <div className={'flex gap-2'}>
          <Button
            onClick={() => {
              setCount(count + 1)
            }}
          >
            +1 {count}
          </Button>
          <Button onClick={() => setModalOpen(true)}>打开modal</Button>
          <Button
            onClick={() => {
              console.log(getAliveRoutes())
            }}
          >
            输出已缓存路由
          </Button>
          <Button onClick={() => destroyAll()}>清除所有路由缓存</Button>
          <Button
            onClick={() => {
              setGlobalCount((t) => t + 1)
            }}
          >
            GlobalCount: {globalCount}
          </Button>
        </div>
      </Card>
      <LoadMore />
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
