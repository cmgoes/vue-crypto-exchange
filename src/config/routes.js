import { createWebHistory, createRouter } from "vue-router";
import Exchange from "../view/Exchange.vue";
import Supply from "../view/Supply.vue";

const routes = [
  {
    path: "/",
    name: "Exchange",
    component: Exchange,
  },
  {
    path: "/supply",
    name: "Supply",
    component: Supply,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;