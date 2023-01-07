import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'


import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faUserSecret, faArrowDown} from "@fortawesome/free-solid-svg-icons";
import { faSun, faMoon } from "@fortawesome/free-regular-svg-icons"

/* add icons to the library */
library.add(faUserSecret, faArrowDown, faSun, faMoon);


const app = createApp(App)
app.use(router)

app.component("font-awesome-icon", FontAwesomeIcon)
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
