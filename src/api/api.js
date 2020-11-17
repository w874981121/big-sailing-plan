import {
    GET,
    POST
} from "./index"


const IPURL = "https://www.zhihu.com/api/v4"
// const IPURL = "/api/v4"
// @一条咸鱼线上接口已经上，可以看下这两个返回，配合 @王利签到&领取接口可以看下
// https://www.zhihu.com/api/v4/event-center/2/task/list 任务列表
// https://www.zhihu.com/api/v4/event-center/2/sign 签到进度
// 用户信息

const getMe = function (options) {
    return GET(`${IPURL}/me`, options)
}

// 首页信息列表@
const index = function () {
    return GET(`${IPURL}/event-center/2/5/gather/index`)
}

// 地图列表@
const collection = function () {
    return GET(`${IPURL}/event-center/2/5/gather/collection`)
}

// 所有地标列表@
const elementAll = function () {
    return GET(`${IPURL}/event-center/2/5/gather/element/all`)
}

// 任务界面，提现接口@
const profile = function () {
    return GET(`${IPURL}/event-center/2/profile`)
}

// 地标详情 @
const elementInfo = function (options) {
    // let {
    //     element_id
    // } = options
    return GET(`${IPURL}/event-center/2/5/gather/element/info`, options)
}

// 获取用户奖励列表 @
const prizes = function () {
    return GET(`${IPURL}/event-center/2/prizes`)
}

// 某地图下地标列表 @
const element = function (options) {
    return GET(`${IPURL}/event-center/2/5/gather/element`, options)
}

// 签到进度 @
const signProgress = function () {
    return GET(`${IPURL}/event-center/2/sign`)
}

// 任务列表 @
const taskList = function () {
    return GET(`${IPURL}/event-center/2/task/list`)
}


// post
// 解锁地标接口@
const postElement = function (options) {
    // let {
    //    element_id
    //    collection_id
    // } = options
    return POST(`${IPURL}/event-center/2/5/gather/element`, options)
}

// 解锁地图接口
const postCollection = function (options) {
    // let {
    //     collection_id
    // } = options
    return POST(`${IPURL}/event-center/2/5/gather/collection`, options)
}


// 签到上报
const postUserTaskCore = function (options) {
    return POST(`${IPURL}/usertask-core/action/come_in`, options)
}


// 完成任务领奖接口
const postObserveRight = function (options) {
    let {
        task_id
    } = options
    return POST(`${IPURL}/usertask_core/task/${task_id}/observe_right`)
}



export {
    getMe,
    index,
    collection,
    element,
    elementAll,
    elementInfo,
    // elementPoster,
    // accumulate,
    profile,
    signProgress,
    prizes,
    taskList,
    postElement,
    postCollection,
    // postAccumulate,
    postUserTaskCore,
    postObserveRight
}