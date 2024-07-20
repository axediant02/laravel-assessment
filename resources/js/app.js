import "./bootstrap";
import router from "./router";
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createApp, h } from 'vue'


import App from "./App.vue";

import Dashboard from "./Pages/Dashboard.vue";

const vuetify = createVuetify({
  components,
  directives,
  Dashboard
})

createApp(App).use(router).use(vuetify).mount("#app");

