import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: ()=> import('@/views/index')
    },{
        path: '/echarts/china-map-samples',
        component: () => import('@/views/echarts/ChinaMapSamples')
    },{
        path: '/echarts/china-map-line-samples',
        component: () => import('@/views/echarts/ChinaMapLineSamples')
    },{
        path: '/echarts/pictorial-bar-samples',
        component: () => import('@/views/echarts/PictorialBarSamples')
    }]
})