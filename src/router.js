import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import ReviewDetail from './components/ReviewDetail.vue';
import AboutView from './components/AboutView.vue'
import TopReviewsView from './components/TopReviewsView.vue'
import CategoriesView from './components/CategoriesView.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/review/:id', component: ReviewDetail, props: true },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/top-reviews',
    name: 'TopReviewsView',
    component: TopReviewsView
  },
  {
    path: '/categories',
    name: 'Categories',
    component: CategoriesView
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
