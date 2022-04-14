// service统一出口
import HYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
// import localCache from '@/utils/cache'

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      if (config.url?.split('/')[1] === 'info') {
        const token = window.localStorage.getItem('token')
        if (token) {
          config.headers.AccessToken = token
        }
        return config
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})

export default hyRequest
