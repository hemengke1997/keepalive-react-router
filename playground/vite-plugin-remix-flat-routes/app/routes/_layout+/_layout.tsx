import { Link, Outlet } from 'react-router-dom'
import { App, Button, Card, Space } from 'antd'
import { useKeepAlive } from 'keepalive-react-router'
import { GlobalContext } from '../../contexts/global-context'

export function Component() {
  const { enableScroll, enableTransition, setEnableScroll, setEnableTransition } = GlobalContext.usePicker([
    'setEnableScroll',
    'setEnableTransition',
    'enableScroll',
    'enableTransition',
  ])

  const { getAliveRoutes, destroyAll } = useKeepAlive()

  const { message } = App.useApp()

  return (
    <div className={'p-8'}>
      <div className={'mb-4 flex items-center gap-4'}>
        <Card title={'配置'}>
          <Space>
            <Button
              onClick={() => {
                setEnableScroll((t) => !t)
              }}
            >
              {enableScroll ? '关闭' : '开启'}滚动恢复
            </Button>
            <Button
              onClick={() => {
                setEnableTransition((t) => !t)
              }}
            >
              {enableTransition ? '关闭' : '开启'}路由动画
            </Button>
          </Space>
        </Card>
        <Card title={'路由跳转'}>
          <Space>
            <Link to='/'>
              <Button>跳转首页</Button>
            </Link>
            <Link to='/signin'>
              <Button>跳转登录</Button>
            </Link>
            <Link to='/signup'>
              <Button>跳转注册</Button>
            </Link>
          </Space>
        </Card>
        <Card title='缓存'>
          <Space>
            <Button
              onClick={() => {
                message.info(`已缓存路由：${getAliveRoutes().join(',')}`)
              }}
            >
              查看缓存
            </Button>
            <Button
              onClick={() => {
                destroyAll()
              }}
            >
              清除缓存
            </Button>
          </Space>
        </Card>
      </div>
      <Outlet />
    </div>
  )
}
