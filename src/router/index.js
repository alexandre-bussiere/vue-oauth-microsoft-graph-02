import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import ConversationsIndexPage from '@/pages/ConversationsIndexPage.vue';
import ConversationShowPage from '@/pages/ConversationShowPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/conversations',
        name: 'ConversationsIndex',
        component: ConversationsIndexPage
    },
    {
        path: '/conversations/:id',
        name: 'ConversationShow',
        component: ConversationShowPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
