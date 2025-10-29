import { createRouter, createWebHistory } from 'vue-router'
 
// 导入你的商城组件（根据实际路径调整）
import Shop from '@/components/Shop.vue' 
 
// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Shop
  },
  {
    path: '/shop',
    name: 'Shop', 
    component: Shop
  }
]
 
// 创建路由实例 
const router = createRouter({
  history: createWebHistory(),
  routes 
})
 
export default router