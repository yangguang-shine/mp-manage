import router from '@/utils/router'
import host from '@/config/host'
import vuex from '@/store'

// #ifdef MP-WEIXIN
import toLogin from '@/utils/wx'
// #endif
import Cookies from 'js-cookie'

// #ifdef H5
const Fly = require("flyio/dist/npm/fly")
const fly = new Fly;
// #endif
// #ifdef MP-WEIXIN
const Fly = require('flyio/dist/npm/wx')
const fly = new Fly;
// #endif
// {
//     method:"",//请求方法， GET 、POST ...
//     headers:{},//请求头
//     baseURL:"",//请求基地址
    //是否自动将Content-Type为“application/json”的响应数据转化为JSON对象，默认为true
//     parseJson:true,
//     timeout:""//超时时间
//   }
fly.config.timeout = 30000;
fly.config.baseURL = `${host}/manage`;

fly.interceptors.request.use(async (request)=>{
    const manageToken = uni.getStorageSync('manageToken') || Cookies.get('manageToken')
    console.log(manageToken)
    Cookies.set('manageToken', `${manageToken}`)
    return request;
})
fly.interceptors.response.use(
    (response) => {
        return response.data
    },
    (err) => {
        console.log('请求失败')
        console.log(err)
        if (err.status === 404) {
            uni.showToast({
                title: '服务异常',
                icon: 'none',
            })
            return null
        }
        uni.showToast({
            title: '网络错误，请稍候再试',
            icon: 'none',
        })
        return null
    }
)
const flyRequest = (url, params, options, method) => {
    return new Promise(async (resolve, reject) => {
        try {
            const res = await fly[method](url, params);
            console.log(res)
            const code = res.code
            if (code === '000') {
                resolve(res)
            } else if (options.error) {
                if (code === '777' || code === "888") {
                    uni.showModal({
                        title: '提示',
                        content: res.msg,
                        confirmText: '去登录',
                        cancelText: '取消登录',
                        success: async (res) => {
                            if (res.confirm) {
                                router.push({
                                    name: 'login',
                                })
                            }
                        }
                    })
                } else {
                    uni.showModal({
                        title: '提示',
                        icon: 'none',
                        content: res.msg
                    })
                }
                reject(res)
            } else {
                reject(res)
            }
        } catch (e) {
            reject()
            console.log(e)
        }
    })
} 
export default {
    get: (url = '', params = {}, options = { error: true }) => flyRequest(url, params, options, 'get'),
    post: (url = '', params = {}, options = { error: true }) => flyRequest(url, params, options, 'post')
}