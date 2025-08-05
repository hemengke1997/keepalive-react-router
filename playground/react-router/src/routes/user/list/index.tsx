import type { ColumnsType } from 'antd/es/table'
import { SearchOutlined } from '@ant-design/icons'
import { Button, Card, Input, Select, Space, Table, Tag } from 'antd'
import { useEffect, useState } from 'react'

interface UserData {
  key: string
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive'
  createTime: string
}

// 模拟用户数据
function generateMockUsers(): UserData[] {
  const roles = ['管理员', '编辑', '用户', '访客']
  const statuses = ['active', 'inactive'] as const

  return Array.from({ length: 100 }, (_, index) => ({
    key: `user-${index + 1}`,
    id: index + 1,
    name: `用户${index + 1}`,
    email: `user${index + 1}@example.com`,
    role: roles[Math.floor(Math.random() * roles.length)],
    status: statuses[Math.floor(Math.random() * statuses.length)],
    createTime: new Date(Date.now() - Math.random() * 365 * 24 * 60 * 60 * 1000).toLocaleDateString('zh-CN'),
  }))
}

export default function UserList() {
  const [users, setUsers] = useState<UserData[]>([])
  const [loading, setLoading] = useState(false)
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: 0,
  })
  const [searchText, setSearchText] = useState('')
  const [statusFilter, setStatusFilter] = useState<string>('all')

  // 模拟数据加载
  useEffect(() => {
    const mockUsers = generateMockUsers()
    setUsers(mockUsers)
    setPagination(prev => ({ ...prev, total: mockUsers.length }))
  }, [])

  // 处理分页变化
  const handleTableChange = (page: number, pageSize: number) => {
    setPagination(prev => ({ ...prev, current: page, pageSize }))
  }

  // 处理搜索
  const handleSearch = () => {
    setPagination(prev => ({ ...prev, current: 1 }))
  }

  // 处理重置
  const handleReset = () => {
    setSearchText('')
    setStatusFilter('all')
    setPagination(prev => ({ ...prev, current: 1 }))
  }

  // 过滤数据
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name.toLowerCase().includes(searchText.toLowerCase())
      || user.email.toLowerCase().includes(searchText.toLowerCase())
    const matchesStatus = statusFilter === 'all' || user.status === statusFilter
    return matchesSearch && matchesStatus
  })

  // 分页数据
  const paginatedUsers = filteredUsers.slice(
    (pagination.current - 1) * pagination.pageSize,
    pagination.current * pagination.pageSize,
  )

  const columns: ColumnsType<UserData> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      width: 80,
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 120,
    },
    {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
      width: 200,
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      width: 100,
    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      width: 100,
      render: (status: string) => (
        <Tag color={status === 'active' ? 'green' : 'red'}>
          {status === 'active' ? '活跃' : '非活跃'}
        </Tag>
      ),
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      key: 'createTime',
      width: 120,
    },
    {
      title: '操作',
      key: 'action',
      width: 150,
      render: (_, record) => (
        <Space size='small'>
          <Button type='link' size='small'>
            编辑
          </Button>
          <Button type='link' size='small' danger>
            删除
          </Button>
        </Space>
      ),
    },
  ]

  return (
    <div style={{ padding: '24px' }}>
      <Card
        title='用户列表'
      >
        {/* 搜索和筛选区域 */}
        <div style={{ marginBottom: '16px' }}>
          <Space>
            <Input
              placeholder='搜索姓名或邮箱'
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              style={{ width: 200 }}
              onPressEnter={handleSearch}
            />
            <Select
              value={statusFilter}
              onChange={setStatusFilter}
              style={{ width: 120 }}
              options={[
                { label: '全部状态', value: 'all' },
                { label: '活跃', value: 'active' },
                { label: '非活跃', value: 'inactive' },
              ]}
            />
            <Button type='primary' icon={<SearchOutlined />} onClick={handleSearch}>
              搜索
            </Button>
            <Button onClick={handleReset}>
              重置
            </Button>
          </Space>
        </div>

        {/* 用户表格 */}
        <Table
          columns={columns}
          dataSource={paginatedUsers}
          loading={loading}
          pagination={{
            current: pagination.current,
            pageSize: pagination.pageSize,
            total: filteredUsers.length,
            showSizeChanger: true,
            showQuickJumper: true,
            showTotal: (total, range) =>
              `第 ${range[0]}-${range[1]} 条，共 ${total} 条记录`,
            onChange: handleTableChange,
          }}
          scroll={{ x: 800 }}
        />
      </Card>
    </div>
  )
}
