import Vue from "vue";
import Router from "vue-router";

import Home from "./views/Home.vue";
import Page1 from "./views/Page1.vue";
import Page2 from "./views/Page2.vue";
import Page3 from "./views/Page3.vue";

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: "*",
            redirect: "/Page1"
          },
          {
            path: "/",
            redirect: "/Page1"
          },
          {
            path: "/Home",
            name: "Home",
            component: Home
          },
          {
            path: "/Page1",
            name: "Page1",
            component: Page1
          },
          {
            path: "/Page2",
            name: "Page2",
            component: Page2
          },
          {
            path: "/Page3",
            name: "Page3",
            component: Page3
          }
    ]
});

export default router;