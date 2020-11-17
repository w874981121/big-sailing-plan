import fetchData from './bundle.min'

/**
 * 将对象转成 a=1&b=2的形式
 * @param obj 对象
 */
function obj2String(obj, arr = [], idx = 0) {
    for (let item in obj) {
        arr[idx++] = [item, obj[item]]
    }
    return new URLSearchParams(arr).toString()
}

/**
 * 真正的请求
 * @param url 请求地址
 * @param options 请求参数
 * @param method 请求方式
 */

function commonFetcdh(url, options, method = 'GET') {
    const searchStr = obj2String(options)
    let initObj = {}
    if (method === 'GET') { // 如果是GET请求，拼接url
        url += '?' + searchStr
        initObj = {
            method: method,
            zsEncrypt: false,
            credentials: 'include'
        }
    } else {
        initObj = {
            method: method,
            zsEncrypt: false,
            isiOS: true,
            credentials: 'include',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(options)
        }
    }
    console.log(initObj)
    return fetchData(url, initObj, {
        captureException: (err, options) => {
            console.log(err, options)
        }
    }).then((res) => {
        return res.json()
    }).then((res) => {
        return res
    })
}

/**
 * GET请求
 * @param url 请求地址
 * @param options 请求参数
 */

function GET(url, options) {
    return commonFetcdh(url, options, 'GET')
}

/**
 * POST请求
 * @param url 请求地址
 * @param options 请求参数
 */
function POST(url, options) {
    return commonFetcdh(url, options, 'POST')
}

export {
    POST,
    GET
}