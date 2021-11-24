import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import L from "leaflet";
createApp(App).use(store).use(L).mount("#app");
