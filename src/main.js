import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.min.css'

// Import Bootstrap's JavaScript
import 'bootstrap/dist/js/bootstrap.bundle'

createApp(App).use(router).mount('#app');
