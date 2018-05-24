import Vue from 'vue';
import Router from 'vue-router';

const index = () => import('@/page/index');
const login = () => import('@/page/login/login');
const message = () => import('@/page/message');

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/404', component: () => import('@/page/404')},
        {
            path: '/login',
            name: '登录',
            component: login
        },
        {
            path: '/resetPwd',
            name: '重置密码',
            component: () => import('@/page/login/reset-pwd'),
        },
        {
            path: '/',
            name: '首页',
            component: index,
            meta: {id: 1}
        },
        {
            path: '/purchaseOrder',
            name: '采购订单',
            component: () => import('@/page/purchase-order'),
            meta: {id: 2}
        },
        {
            path: '/purchaseOrder/details',
            name: '订单详情',
            component: () => import('@/page/purchase-order/order-details'),
            meta: {id: 2},
        },
        //发票
        {
            path: '/invoice',
            name: '发票管理',
            component: () => import('@/page/invoice'),
            meta: {id: 3}
        },
        {
            path: '/invoice/invoiceDetails',
            name: '发票详情',
            component: () => import('@/page/invoice/invoice-details'),
            meta: {id: 3}
        },
        {
            path: '/invoice/createPoSele',
            name: '发票创建',
            component: () => import('@/page/invoice/create-po-sele'),
            meta: {id: 3}
        },
        {
            path: '/invoice/createDetails',
            name: '发票创建详情',
            component: () => import('@/page/invoice/create-details'),
            meta: {id: 3}
        },
        {
            path: '/beforemoney',
            name: '贴现申请',
            component: () => import('@/page/before-money'),
            meta: {id:4}
        },
        {
            path: '/plan',
            name: '资金计划',
            component: () => import('@/page/money-plan'),
            meta: {id: 5}
        },
        {
            path: '/due',
            name: '应收账款',
            component: () => import('@/page/due-money'),
            meta: {id: 6}
        },
        {
            path: '/message',
            name: '消息',
            component: message
        },
        { path: '*', redirect: '/404'}
    ]
})
