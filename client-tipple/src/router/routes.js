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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
