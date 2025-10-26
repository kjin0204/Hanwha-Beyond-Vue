import { createApp } from 'vue'
import App from './App.vue'
import router from './router/01_router.js'  //router 설정 js 파일 import

/* npm install vue-router@next로 dependency 추가 */
const app = createApp(App);
app.use(router); //router 맵핑 정보 사용
app.mount('#app');
