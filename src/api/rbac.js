import request from '@/utils/request'

/**
 * 获取用户列表数据
 */
export const UserList = data => {
  return request({
    url: '/user-manage/list',
    method: 'GET',
    params: data
  })
}

/**
 * 用户删除
 */
export const UserDelete = id => {
  return request({
    url: `/user-manage/detele/${id}`,
    method: 'GET'
  })
}

/**
 * 获取所有用户列表数据
 */
export const UserAllList = () => {
  return request({
    url: '/user-manage/all-list',
    method: 'GET'
  })
}

/**
 * 获取用户详情
 */
export const UserDetail = id => {
  return request({
    url: `/user-manage/detail/${id}`,
    method: 'GET'
  })
}

/**
 * 获取所有角色
 */
export const RoleList = () => {
  return request({
    url: '/role/list',
    method: 'GET'
  })
}

/*
  获取指定用户角色
 */
export const UserSingleRoles = id => {
  return request({
    url: `/user-manage/role/${id}`,
    method: 'GET'
  })
}

/**
 * 为用户分配角色
 */
export const UpdateRole = (id, roles) => {
  return request({
    url: `/user-manage/update-role/${id}`,
    method: 'POST',
    data: {
      roles
    }
  })
}

/**
 * 获取所有权限
 */
export const PermissionList = () => {
  return request({
    url: '/permission/list',
    method: 'GET'
  })
}

/**
 * 获取指定角色的权限
 */
export const RoleSinglePermission = roleId => {
  return request({
    url: `/role/permission/${roleId}`
  })
}
