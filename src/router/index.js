import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/admin/:component?",
    name: "admin",
    component: () => import("../views/AdminView.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      role: "admin",
    },
  },
  {
    path: "/user/:component?",
    name: "user",
    component: () => import("../views/UserView.vue"),
    props: true,
    meta: {
      requiresAuth: true,
      role: "user",
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("../views/NotFoundView.vue"),
    props: true,
  },
  {
    path: "/",
    redirect: { name: "admin", params: { component: "items" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = Boolean(localStorage.getItem("auth"));
  const userRole = localStorage.getItem("role");

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: "login" });
  } else if (
    to.meta.requiresAuth &&
    isAuthenticated &&
    to.meta.role !== userRole
  ) {
    alert("You do not have permission to access this page.");
    next(false);
  } else {
    next();
  }
});

export default router;
