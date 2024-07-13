import { createRouter, createWebHistory } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../components/Home/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Layout",
      component: Layout,
      children: [
        {
          path: "/", // This will be the default route for the layout
          name: "Home",
          component: Home,
        },
      ],
    },
    // Add more routes as needed
  ],
});

export default router;
