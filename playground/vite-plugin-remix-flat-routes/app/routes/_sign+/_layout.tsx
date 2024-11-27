import { Outlet } from 'react-router-dom'

export function Component() {
  return (
    <div>
      <div className={'mb-4'}>Layout</div>
      <Outlet />
    </div>
  )
}
