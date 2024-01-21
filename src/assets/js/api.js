import axios from 'axios'

const baseUrl = import.meta.env.VITE_API
const path = import.meta.env.VITE_APIPATH

const hexUserAPI = axios.create({
  baseURL: `${baseUrl}v2/api/${path}`
})
const hexAdminAPI = axios.create({
  baseURL: `${baseUrl}v2/api/${path}`
})

const loginAPI = axios.create({
  baseURL: `${baseUrl}v2`
})

const getUserProduct = async () => {
  try {
    const res = await hexUserAPI.get('/products')
    return res
  } catch (err) {
    return err
  }
}

const getUserSingleProduct = async (id) => {
  try {
    const res = await hexUserAPI.get(`/product/${id}`)
    return res
  } catch (err) {
    return err
  }
}

const adminLogin = async (data) => {
  try {
    const res = await loginAPI.post('/admin/signin', data)
    return res
  } catch (err) {
    return err
  }
}

const adminCheckLogin = async () => {
  try {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)escaperoom\s*=\s*([^;]*).*$)|^.*$/, '$1')
    loginAPI.defaults.headers.common.Authorization = token
    const res = await loginAPI.post('/api/user/check')
    return res
  } catch (err) {
    return err
  }
}

const adminLogout = async () => {
  try {
    const res = await loginAPI.post('/logout')
    return res
  } catch (err) {
    return err
  }
}

export { getUserProduct, getUserSingleProduct, adminLogin, adminCheckLogin, adminLogout }
