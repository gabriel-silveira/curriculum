const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/index.vue') },
      { path: 'experience', name: 'experience', component: () => import('pages/experience.vue') },
      { path: 'education', name: 'education', component: () => import('pages/education.vue') },
      { path: 'skills', name: 'skills', component: () => import('pages/skills.vue') },
      { path: 'contact', name: 'contact', component: () => import('pages/contact.vue') }
    ]
  },

  {
    path: '*',
    component: () => import('pages/error-404.vue')
  }
]

export default routes
