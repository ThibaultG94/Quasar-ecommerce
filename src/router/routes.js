const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/HomePage.vue") },
      { path: "dvd", component: () => import("pages/DVD/index.vue") },
      { path: "blu-ray", component: () => import("pages/BluRay/index.vue") },
      { path: "box-sets", component: () => import("pages/BoxSets/index.vue") },
      { path: "deals", component: () => import("pages/Deals.vue") },
      {
        path: "new-releases",
        component: () => import("pages/NewReleases.vue"),
      },
      { path: "pre-orders", component: () => import("pages/PreOrders.vue") },
      { path: "classics", component: () => import("pages/Classics.vue") },
      { path: "contact", component: () => import("pages/Contact.vue") },
      { path: "dvd/:id", component: () => import("pages/DVD/Detail.vue") },
      {
        path: "blu-ray/:id",
        component: () => import("pages/BluRay/Detail.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
