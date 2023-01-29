import { Avatar, Layout, Menu, theme } from 'antd'
import { useState } from 'react'

const { Sider, Content } = Layout

const initialTravels = [
  {
    id: '001',
    place: 'Huaraz',
    image: 'https://picsum.photos/32/32?id=001',
  },
  {
    id: '002',
    place: 'Chiclayo',
    image: 'https://picsum.photos/32/32?id=002',
  },
  {
    id: '003',
    place: 'Cajamarca',
    image: 'https://picsum.photos/32/32?id=003',
  },
]

export function ExpenseLayout({ children }) {
  const [travels, setTravels] = useState(initialTravels)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const items = initialTravels.map((travel) => ({
    key: travel.id,
    icon: <Avatar src={travel.image} alt={travel.place} shape="circle" />,
    label: travel.place,
  }))

  return (
    <Layout style={{ padding: '2rem 0', background: colorBgContainer }}>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={initialTravels[0].id}
          style={{ height: '100%' }}
          items={items}
        />
      </Sider>
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        {children}
      </Content>
    </Layout>
  )
}
