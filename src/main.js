import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import "./assets/css/app.css";
import 'bootstrap/dist/js/bootstrap.bundle.js'; 
import 'bootstrap/dist/js/bootstrap.bundle'; 
import "bootstrap/dist/css/bootstrap.css"; 
import '@fortawesome/fontawesome-free/css/all.css'; 

const app = createApp(App);

app.use(router);

// Mount the app
app.mount("#app");
