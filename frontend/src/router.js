import { createRouter, createWebHistory } from "vue-router";
import AppLayout from "./components/AppLayout.vue";
// Import pages
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import MyImages from "./pages/MyImages.vue";
import Login from "./pages/Login.vue";
import Signup from "./pages/signup.vue";
import Upload from "./pages/Upload.vue";
import NotFound from "./pages/NotFound.vue";

const routes = [
  {
    path: "/",
    component: AppLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/about",
        name: "About",
        component: About,
      },

      {
        path: "/upload",
        name: "Upload",
        component: Upload,
      },

      {
        path: "/myimages",
        name: "MyImages",
        component: MyImages,
      },
    ],
  },

  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.afterEach(async (to, from, failure) => {
  if (!failure) setTimeout(() => window.HSStaticMethods.autoInit(), 100);
});

export default router;
