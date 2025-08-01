import { createApp } from "vue";
import "./style.css";
// Import Preline JS (adjust path if needed)
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
