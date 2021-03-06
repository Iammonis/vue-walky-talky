import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home';
import ChatRoom from '../components/ChatRoom';

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/chats/:id', component: ChatRoom, name: 'chat' }
];

const router = new VueRouter({
  routes
})

export default router
