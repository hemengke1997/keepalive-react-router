import { useState } from 'react'
import { Link, useRouteError } from 'react-router-dom'
import { Button, Space } from 'antd'
import { KeepAlive, KeepAliveProvider } from 'keepalive-react-router'
import { GlobalContext } from './contexts/global-context'

export function Component() {
  const [enableScroll, setEnableScroll] = useState(true)
  const [enableTransition, setEnableTransition] = useState(true)
  return (
    <>
      <div className={'mb-4 flex items-center gap-2'}>
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
      </div>
      <>
        <KeepAliveProvider>
          <GlobalContext.Provider>
            <KeepAlive transition={enableTransition} scrollRestoration={enableScroll ? {} : false} />
          </GlobalContext.Provider>
        </KeepAliveProvider>
      </>
    </>
  )
}

export function ErrorBoundary() {
  const error = useRouteError()
  console.log(error)

  return <>Oops!</>
}
