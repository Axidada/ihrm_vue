import Vue from 'vue'
import Router from 'vue-router'
import Element from 'element-ui'
import Login from "@/model-dashboard/pages/login"
import Index from "@/model-dashboard/Index";
import Company from "@/model-dashboard/Company";

// const _import = require('./import_'+process.env.NODE_ENV)  //懒加载 导包
//const whiteList = ['/login','/reg','/authredirect']        //白名单无需跳转

//配置
Vue.use(Router)
Vue.use(Element)


export default new Router({
    mode: 'history', //默认hash模式
    routes:[
        {
            //当访问的是这个路径时'/' 访问的组件就是Login
            path:'/',
            component:Login
        },
        {
            //当访问的是这个路径时'Index' 访问的就是Index
            path: '/Index',
            component: Index,
        children:[{
            path:'company',
            component:Company,
            }]
        },

    ]
})

