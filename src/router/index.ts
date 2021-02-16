import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Note from "../views/NotesPage.vue";
import About from "../views/AboutPage.vue";
import Authorization from "../views/AuthorizationPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/note",
    name: "Note",
    component: Note
  },
  {
    path: "/authorization",
    name: "Authorization",
    component: Authorization
  },
  {
    path: "/",
    name: "About",
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
