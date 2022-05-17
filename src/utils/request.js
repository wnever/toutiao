import axios from 'axios'
// 通过axios的create方法创建一个小实例对象
const request = axios.create({
  // 指定请求根路径
  baseURL: 'http://www.liulongbin.top:8000'
})

export default request
