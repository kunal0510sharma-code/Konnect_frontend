import { useLocation, useNavigate } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { Activity } from 'lucide-react'
import {
  LayoutDashboard,
  GitBranch,
  Users,
  ShieldAlert,
  Webhook,
  FolderTree,
  Settings2,
} from 'lucide-react'
import useAppStore from '../../store'

const { Sider } = Layout

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { sidebarCollapsed, toggleSidebar } = useAppStore()

  const activeKey = location.pathname.split('/')[1] || 'dashboard'

  const items = [
    { key: 'dashboard', icon: <LayoutDashboard size={18} />, label: 'Dashboard' },
    { key: 'repositories', icon: <GitBranch size={18} />, label: 'Repositories' },
    { key: 'users', icon: <Users size={18} />, label: 'Users' },
    { key: 'groups', icon: <FolderTree size={18} />, label: 'Groups' },
    { key: 'permissions', icon: <ShieldAlert size={18} />, label: 'Permissions' },
    { key: 'hooks', icon: <Webhook size={18} />, label: 'Hooks' },
    { type: 'divider' },
    { key: 'settings', icon: <Settings2 size={18} />, label: 'Settings' },
  { key: 'activity', icon: <Activity size={18} />, label: 'Activity' }
  ]

  return (
    <Sider
      collapsible
      collapsed={sidebarCollapsed}
      onCollapse={toggleSidebar}
      theme="light"
      width={240}
      style={{
        background: '#fff',
        borderRight: '1px solid #e5e7eb',
        height: '100vh',
        position: 'fixed',
      }}
    >
      <div
        style={{
          height: 64,
          display: 'flex',
          alignItems: 'center',
          padding: '0 20px',
          borderBottom: '1px solid #e5e7eb',
          fontWeight: 700,
        }}
      >
        ARIHANTKonnect
      </div>

      <Menu
        theme="light"
        mode="inline"
        selectedKeys={[activeKey]}
        onClick={({ key }) => navigate(`/${key}`)}
        items={items}
      />
    </Sider>
  )
}

export default Sidebar