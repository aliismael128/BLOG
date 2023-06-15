import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import blog from '../views/blog.vue'
import Article from "../components/Article.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: blog
    },
    {
      path: '/Article/:id',
      name: 'Article',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Article
    },
  ]
})

export default router

