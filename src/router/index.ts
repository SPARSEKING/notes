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
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/authorization",
    name: "Authorization",
    component: Authorization
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
