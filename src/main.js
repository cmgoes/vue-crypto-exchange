import { createApp } from 'vue'
import App from './App.vue'
import routes from './config/routes.js';
import './assets/app.css';

const app = createApp(App);

app.use(routes)
app.mount('#app')
