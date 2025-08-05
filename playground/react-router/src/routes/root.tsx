import { Button, Layout, Menu, Space, theme } from 'antd'
import { KeepAliveOutlet, KeepAliveProvider } from 'keepalive-react-router'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AliveRoutes from '../components/alive-routes'
import { menuItems } from '../router'

const { Header, Content, Footer, Sider } = Layout

export default function Root() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const [enableScroll, setEnableScroll] = useState(true)
  const [enableTransition, setEnableTransition] = useState(true)

  const navigate = useNavigate()

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }} className='font-bold text-xl'>
        KeepAlive React Router Demo

        <Space className='ml-8'>
          <Button
            onClick={() => {
              setEnableScroll(t => !t)
            }}
          >
            {enableScroll ? '关闭' : '开启'}
            滚动恢复
          </Button>
          <Button
            onClick={() => {
              setEnableTransition(t => !t)
            }}
          >
            {enableTransition ? '关闭' : '开启'}
            路由动画
          </Button>
        </Space>
      </Header>
      <div style={{ padding: '0 48px' }} className='mt-4'>
        <Layout
          style={{ padding: '24px 0', background: colorBgContainer, borderRadius: borderRadiusLG }}
        >
          <Sider style={{ background: colorBgContainer }} width={200}>
            <Menu
              mode='inline'
              selectedKeys={[location.pathname]}
              style={{ height: '100%' }}
              items={menuItems}
              onClick={(v) => {
                navigate(v.key)
              }}
            />
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <KeepAliveProvider>
              <AliveRoutes />
              <KeepAliveOutlet transition={enableTransition} scrollRestoration={enableScroll ? {} : false} />
            </KeepAliveProvider>
          </Content>
        </Layout>
      </div>
      <Footer style={{ textAlign: 'center' }}>
        keepalive-react-router //
        {new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}
