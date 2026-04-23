import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import useAppStore from '../../store'

const { Header, Content } = Layout

const AppLayout = () => {
  const { sidebarCollapsed } = useAppStore()

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />

      <Layout
        style={{
          marginLeft: sidebarCollapsed ? 80 : 240,
          transition: '0.2s',
        }}
      >
        <Header
          style={{
            background: '#f5f7fa',
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '0 24px',
          }}
        >
          Admin User
        </Header>

        <Content style={{ margin: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default AppLayout