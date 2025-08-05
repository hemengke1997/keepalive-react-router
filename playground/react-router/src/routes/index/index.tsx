import { useActivated, useDeactivated } from 'keepalive-react-router'
import LoadMore from '../../components/load-more'

export const handle = {
  keepAlive: true,
}

export default function Index() {
  console.log('index --- render')

  useActivated(() => {
    console.log('index --- actived')
  })

  useDeactivated(() => {
    console.log('index --- deactived')
  })

  return (
    <div className='h-screen'>
      <h1>首页</h1>
      <LoadMore />
    </div>
  )
}
