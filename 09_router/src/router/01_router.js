// router 설정을 위한 함수 할당
import {createRouter, createWebHashHistory} from 'vue-router';
// page로 사용 할 컴포넌트
import HomeView from '@/views/01_router/HomeView.vue';
import PathVariable from '@/views/01_router/PathVariable.vue';
import QueryString from '@/views/01_router/QueryString.vue';

/* routes: 배열 형태로 요청과 컴포넌트 매칭
path: client 요청 경로
compnet: 맵핑할 컴포넌트
*/
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: HomeView
        },
        {
            path: '/pathvariable/:id', // :id(숫자로 들어오는 pathValue 맵핑)
            component: PathVariable
        },
        {
            path: '/queryString',       // ?뒤로 들어오는 queryString 자동 맵핑
            component: QueryString
        }

    ]
});

export default router;