import { MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons'
import { Button, Card, Form, Input, message, Select, Space } from 'antd'
import { useState } from 'react'

const { Option } = Select

interface UserFormData {
  name: string
  email: string
  phone: string
  department: string
  role: string
}

export default function UserAdd() {
  const [form] = Form.useForm()
  const [loading, setLoading] = useState(false)

  const onFinish = async (values: UserFormData) => {
    setLoading(true)

    // 模拟 API 调用
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('提交的用户数据:', values)
    message.success('用户添加成功！')
    form.resetFields()
    setLoading(false)
  }

  const onReset = () => {
    form.resetFields()
  }

  return (
    <div style={{ padding: '24px', maxWidth: '600px', margin: '0 auto' }}>
      <Card title='添加用户'>
        <Form
          form={form}
          layout='vertical'
          onFinish={onFinish}
          autoComplete='off'
        >
          <Form.Item
            name='name'
            label='姓名'
            rules={[
              { required: true, message: '请输入姓名' },
              { min: 2, message: '姓名至少2个字符' },
            ]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder='请输入用户姓名'
              size='large'
            />
          </Form.Item>

          <Form.Item
            name='email'
            label='邮箱'
            rules={[
              { required: true, message: '请输入邮箱' },
              { type: 'email', message: '请输入有效的邮箱地址' },
            ]}
          >
            <Input
              prefix={<MailOutlined />}
              placeholder='请输入邮箱地址'
              size='large'
            />
          </Form.Item>

          <Form.Item
            name='phone'
            label='手机号'
            rules={[
              { required: true, message: '请输入手机号' },
              { pattern: /^1[3-9]\d{9}$/, message: '请输入有效的手机号' },
            ]}
          >
            <Input
              prefix={<PhoneOutlined />}
              placeholder='请输入手机号'
              size='large'
            />
          </Form.Item>

          <Form.Item
            name='department'
            label='部门'
            rules={[{ required: true, message: '请选择部门' }]}
          >
            <Select placeholder='请选择部门' size='large'>
              <Option value='技术部'>技术部</Option>
              <Option value='产品部'>产品部</Option>
              <Option value='设计部'>设计部</Option>
              <Option value='运营部'>运营部</Option>
              <Option value='市场部'>市场部</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name='role'
            label='角色'
            rules={[{ required: true, message: '请选择角色' }]}
          >
            <Select placeholder='请选择角色' size='large'>
              <Option value='员工'>员工</Option>
              <Option value='主管'>主管</Option>
              <Option value='经理'>经理</Option>
              <Option value='总监'>总监</Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Space size='middle' style={{ width: '100%', justifyContent: 'center' }}>
              <Button
                type='primary'
                htmlType='submit'
                loading={loading}
                size='large'
                icon={<UserOutlined />}
              >
                添加用户
              </Button>
              <Button
                onClick={onReset}
                size='large'
              >
                重置
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
