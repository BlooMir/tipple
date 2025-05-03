const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MainScreen.vue') },
      { path: '/mail', component: () => import('pages/MailDesktop.vue') },
      { path: '/music', component: () => import('pages/MusicTablet.vue') },
      { path: '/talk', component: () => import('pages/TalkPhone.vue') },
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/404/ErrorNotFound.vue')
  }
]

export default routes
