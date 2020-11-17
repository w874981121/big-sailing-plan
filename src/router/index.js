import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '../pages/loading.vue'
import ChooseIsland from '../pages/choose-island.vue'
import MyLandmark from '../pages/my-landmark.vue'
import MyReward from '../pages/my-reward.vue'
import Poster from '../pages/poster.vue'
import PageIslands from '../pages/pageislands.vue'

Vue.use(VueRouter)
const routes = [{
    path: '/',
    name: 'loading',
    component: Loading
}, {
    path: '/ci',
    name: 'chooseIsland',
    component: ChooseIsland,
}, {
    path: '/pi',
    name: 'PageIslands',
    component: PageIslands
}, {
    path: '/ml',
    name: 'MyLandmark',
    component: MyLandmark
}, {
    path: '/mr',
    name: 'MyReward',
    component: MyReward
}, {
    path: '/poster',
    name: 'Poster',
    component: Poster
}]

const router = new VueRouter({
    mode: "hash", //history  hash
    routes
})



export default router