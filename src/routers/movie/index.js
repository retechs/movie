export default{
    path:"/movie",  
    component: () => import("@/views/movie"),
    children:[
        {
            path:"city",
            component:()=>import('@/components/City')
        },
        {
            path:"NowPlaying",
            component:()=>import('@/components/NowPlaying')
        },
        {
            path:"ComingSoon",
            component:()=>import('@/components/ComingSoon')
        },
        {
            path:"Search",
            component:()=>import('@/components/Search')
        },
        {
            path:"/movie",
            redirect:"/movie/NowPlaying",
        }

    ]

}
