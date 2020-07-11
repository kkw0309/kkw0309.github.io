import axios from 'axios'
import { Guid } from './guid'

// 获取设备id
let DeviceID = localStorage.DeviceID;
if (!DeviceID) {
    DeviceID = Guid.NewGuid().ToString('D');
    localStorage.DeviceID = DeviceID;
}
let ID = DeviceID;

axios.defaults.baseURL = 'https://www.365msmk.com';

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers = {
        deviceid:ID,
        devicetype:"H5"
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

export default axios