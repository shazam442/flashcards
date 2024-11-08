import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createMemoryHistory, createRouter } from "vue-router";

import Flashcards from "./components/Flashcards.vue";
import FlashcardsCreate from "./components/FlashcardsCreate.vue";

const routes = [
  { path: "/", component: Flashcards },
  { path: "/create", component: FlashcardsCreate },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
