import type { MenuProps } from 'antd'
import type { RouteObject } from 'react-router-dom'

import { DashboardOutlined, UserOutlined } from '@ant-design/icons'
import Index from './routes/index'

import Root from './routes/root'
import UserAdd from './routes/user/add'
import UserList from './routes/user/list'

export const routes: RouteObject[] = [
  {
    path: '',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Index />,
        handle: {
          keepAlive: true,
          icon: <DashboardOutlined />,
          label: '首页',
        },
      },
      {
        path: '/user',
        Component: null,
        handle: {
          icon: <UserOutlined />,
          label: '用户管理',
        },
        children: [{
          path: '/user/list',
          element: <UserList />,
          handle: {
            keepAlive: true,
            label: '用户列表',
          },
        }, {
          path: '/user/add',
          element: <UserAdd />,
          handle: {
            keepAlive: true,
            label: '添加用户',
          },
        }],
      },
    ],
  },
]

/**
 * 将路由配置转换为 Ant Design 菜单项
 * @param routes 路由配置数组
 * @returns Ant Design 菜单项数组
 */
export function convertRoutesToMenu(routes: RouteObject[]): MenuProps['items'] {
  // 递归处理路由
  const processRoutes = (routeList: RouteObject[]): MenuProps['items'] => {
    return routeList
      .filter((route) => {
        // 过滤掉没有 path 或 path 为空字符串的路由
        return route.path && route.path !== ''
      })
      .map((route) => {
        const routeWithHandle = route
        const handle = routeWithHandle.handle || {}

        const menuItem: any = {
          key: route.path,
          label: handle.label || route.path,
        }

        // 如果有图标，添加到菜单项
        if (handle.icon) {
          menuItem.icon = handle.icon
        }

        // 如果有子路由，递归处理
        if (route.children && route.children.length > 0) {
          const children = processRoutes(route.children)
          if (children && children.length > 0) {
            menuItem.children = children
          }
        }

        return menuItem
      })
  }

  // 找到 Root 路由的子路由
  const rootRoute = routes.find(route => route.path === '' || route.path === '/')
  if (rootRoute && rootRoute.children) {
    return processRoutes(rootRoute.children)
  }

  // 如果没有找到 Root 路由，直接处理所有路由
  return processRoutes(routes)
}

export const menuItems = convertRoutesToMenu(routes)

/**
 * 根据 pathname 在路由配置中找到对应的 handle
 * @param pathname 当前路径
 * @param routes 路由配置数组
 * @returns 匹配的路由 handle，如果没有找到则返回 null
 */
export function findHandleByPathnameInRoutes(
  pathname: string,
  routes: RouteObject[],
): any {
  if (!routes || !Array.isArray(routes)) {
    return null
  }

  // 递归查找函数
  const findHandle = (routeList: RouteObject[]): any => {
    for (const route of routeList) {
      if (!route)
        continue

      // 检查当前路由是否匹配
      if (route.path === pathname) {
        return (route as any).handle || null
      }

      // 如果有子路由，递归查找
      if (route.children && route.children.length > 0) {
        const found = findHandle(route.children)
        if (found) {
          return found
        }
      }
    }

    return null
  }

  return findHandle(routes)
}
