import { createApp } from 'vue';
import App from './App.vue';
import VueCase from './index';

const app = createApp(App);

// Use VueCase plugin
app.use(VueCase);

app.mount('#app');

