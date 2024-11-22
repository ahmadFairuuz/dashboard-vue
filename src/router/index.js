import { useAuthStore } from "@/store/authStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/HomeView.vue"),
    meta: { hideHeader: true, hideSidebar: true },

    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../components/auth/Login.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("../components/auth/Register.vue"),
      },
    ],
  },
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
  const authStore = useAuthStore();
  const isAuthenticated = !!authStore.token;
  const userRole = authStore.role.toLowerCase();

  if (to.meta.requiresAuth) {
    if (isAuthenticated) {
      if (userRole === to.meta.role || to.meta.role === undefined) {
        next();
      } else {
        next({ name: "home" });
      }
    } else {
      next({ name: "home" });
    }
  } else {
    next();
  }
});

export default router;
