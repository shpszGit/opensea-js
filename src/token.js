import Cookies from 'js.cookie'
const key = 'uid'
// 保存token
export function saveToken(token) {
  // 保存数据 token的值 是外部传入的
  return Cookies.set(key, token)
}
// 获取token
export function getToken() {
  return Cookies.get(key)
}
// 删除token
export function removeToken() {
  Cookies.remove(key)
}
