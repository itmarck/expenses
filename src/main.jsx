import { App, ConfigProvider } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ExpenseBoard } from './components/ExpenseBoard'

const componentSize = 'small'

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ConfigProvider componentSize={componentSize}>
      <App>
        <ExpenseBoard />
      </App>
    </ConfigProvider>
  </React.StrictMode>,
)
