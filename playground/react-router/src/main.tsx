import { App as AntdApp, ConfigProvider, theme } from 'antd'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <ConfigProvider
    theme={{
      cssVar: true,
      algorithm: [theme.darkAlgorithm],
    }}
  >
    <AntdApp>
      <App />
    </AntdApp>
  </ConfigProvider>,
)
