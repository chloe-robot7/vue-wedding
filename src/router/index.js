import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                // {
                //     path: '/icon',
                //     component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                //     meta: { title: '自定义图标' }
                // },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '宾客名单' }
                },
                {
                    path: '/info',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/weddingInfo.vue'),
                    meta: { title: '全部婚礼信息展示' }
                },
                {
                    path: '/userInfo',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/UserInfo.vue'),
                    meta: { title: '全部用户信息管理' }
                },
                {
                    path: '/classClassify',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/classClassify.vue'),
                    meta: { title: '分类管理' }
                },
                {
                    path: '/classContent',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/classContent.vue'),
                    meta: { title: '学堂内容管理' }

                },
                {
                    path: '/mate',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/mate.vue'),
                    meta: { title: '红娘信息管理' }

                },
                {
                    path: '/video',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/video.vue'),
                    meta: { title: '视频信息管理' }

                },

                // {
                //     path: '/tabs',
                //     component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                //     meta: { title: 'tab选项卡' }
                // },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '婚礼基本信息' }
                },
                {
                    path: '/activeContent',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/activeContent.vue'),
                    meta: { title: 'activeContent' }
                },
                {
                    path: '/activeapply',
                    component: () => import(/* webpackChunkName: "form" */ '../components/demo/activeapply.vue'),
                    meta: { title: 'activeapply' }
                },

                // {
                //     // 富文本编辑器组件
                //     path: '/editor',
                //     component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                //     meta: { title: '富文本编辑器' }
                // },
                // {
                //     // markdown组件
                //     path: '/markdown',
                //     component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                //     meta: { title: 'markdown编辑器' }
                // },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                // {
                //     // vue-schart组件
                //     path: '/charts',
                //     component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                //     meta: { title: 'schart图表' }
                // },
                // {
                //     // 拖拽列表组件
                //     path: '/drag',
                //     component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                //     meta: { title: '拖拽列表' }
                // }
                // {
                //     // 拖拽Dialog组件
                //     path: '/dialog',
                //     component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                //     meta: { title: '拖拽弹框' }
                // },
                // {
                //     // 国际化组件
                //     path: '/i18n',
                //     component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                //     meta: { title: '国际化' }
                // },
                // {
                //     path: '/404',
                //     component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                //     meta: { title: '404' }
                // },
                // {
                //     path: '/403',
                //     component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                //     meta: { title: '403' }
                // },
                // {
               
            ]
        },
        {
            path: '/firstpage',
            component: () => import(/* webpackChunkName: "form" */ '../components/demo/firstpage.vue'),
            meta: { title: 'firstpage' }
        },
        {
            path: '/uLogin',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '用户登录' }
        },
        {
            path: '/aLogin',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/adminLogin.vue'),
            meta: { title: '管理员登录' }
        },
        {
            path: '/register',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/register.vue'),
            meta: { title: '注册' }
        },
        {
            path: '/welcome',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/welcome.vue'),
            meta: { title: 'welcome' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
