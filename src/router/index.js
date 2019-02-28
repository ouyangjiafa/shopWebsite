// import Vue from 'vue'
// import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
import Vue from 'vue';
import Router from 'vue-router';
// import Home from '../components/home';
// import Sort from '../components/sort';
// import ShopCar from '../components/shopCar';
// import Personal from '../components/personal';
// import Find from '../components/find';

Vue.use(Router);

export default new Router({
  routes: [ // 不要写成routers或其他
    {
      path: '/',
      redirect: '/home',
      component: (resolve) => require(['../components/home/index'], resolve)
    },
    {
      path: '/home',
      component: (resolve) => require(['../components/home/index'], resolve)
    },
    {
      path: '/sort',
      component: (resolve) => require(['../components/sort/index'], resolve)
    },
    {
      path: '/find',
      component: (resolve) => require(['../components/find/index'], resolve)
    },
    {
      path: '/shopCar',
      component: (resolve) => require(['../components/shopCar/index'], resolve)
    },
    {
      path: '/personal',
      component: (resolve) => require(['../components/personal/index'], resolve)
    }
  ],
  linkActiveClass: 'link-active'
});
