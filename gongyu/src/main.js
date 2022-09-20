import { createApp } from "vue";
import App from "./App.vue";
import './assets/css/style.css';
import router from './router/index.js'
var Vue=createApp(App).use(router).mount("#app");
// 关闭生产提示
Vue.config.productionTip = false

