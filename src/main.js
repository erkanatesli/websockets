import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import SocketIO from 'socket.io-client';
import Vue3SocketIO from '@hlf01/vue3-socket.io';

const vue3SocketIO = new Vue3SocketIO({
    debug: true,
    connection: SocketIO('http://localhost:3000'),
});

const app = createApp(App)
app.use(vue3SocketIO)
app.mount('#app')