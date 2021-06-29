
const routes = [
  {
    path: '/',
    component: () => import('../layout/sidebar.vue'),
    children: [
      { 
        path: '',
        component: () => import('../views/Home.vue'),
        meta: {
          requiresAuth: true
        }
      },
      { 
        path: 'signin',
        component: () => import('../views/signin.vue'),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/Error404.vue')
  }
]

export default routes
