import { Avatar, Layout, Menu, theme } from 'antd'
import { initialTravels } from '../../data/travels'
import { useTravel } from '../../hooks/useTravel'

const { Sider, Content } = Layout

export function ExpenseLayout({ children }) {
  const { travel, setSelectedTravel } = useTravel()

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
          defaultSelectedKeys={travel.id}
          onSelect={(value) => setSelectedTravel(value.key)}
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
