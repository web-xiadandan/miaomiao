export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    // 二级路由
    children:[
        {
            path:'city',
            component : () => import('@/components/City')
        },
        {
            path:'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path:'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path:'search',
            component : () => import('@/components/Search')
        },
        // 重定向,即默认页面
        {
            // 有斜杠代表绝对定位
            path:'/movie',
            redirect:'/movie/nowPlaying'
        }
    ]
}