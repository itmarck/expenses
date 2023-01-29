import { App, ConfigProvider, Layout } from 'antd'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ExpenseBoard } from './components/ExpenseBoard'
import { ExpenseLayout } from './components/ExpenseLayout'

import './App.css'

const { Header, Content, Footer } = Layout

const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <React.StrictMode>
    <ConfigProvider componentSize="small">
      <App>
        <Layout style={{ minHeight: '100vh' }}>
          <Header />

          <Content style={{ padding: '2rem 4rem' }}>
            <ExpenseLayout>
              <ExpenseBoard />
            </ExpenseLayout>
          </Content>

          <Footer style={{ textAlign: 'center' }}>
            Todos los derechos reservados
          </Footer>
        </Layout>
      </App>
    </ConfigProvider>
  </React.StrictMode>,
)
