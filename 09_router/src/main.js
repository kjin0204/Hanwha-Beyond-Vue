import { createApp } from 'vue'
import App from './App.vue'
// import router from './router/01_router.js'
import nesteRouter from './router/02_nestedRouter'

/* npm install vue-router@next로 dependency 추가 */
const app = createApp(App);
// app.use(router);
app.use(nesteRouter);
app.mount('#app');
