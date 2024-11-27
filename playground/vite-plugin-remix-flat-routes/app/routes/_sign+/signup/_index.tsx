import { useEffect, useState } from 'react'
import { Button, Card, Space } from 'antd'

export default function Page() {
  const [count, setCount] = useState(0)

  console.log('signup --- render')

  useEffect(() => {
    console.log('signup --- effect')
    return () => {
      console.log('signup --- cleanup')
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
            点击count+ {count}
          </Button>
        </Space>
      </Card>
    </div>
  )
}
