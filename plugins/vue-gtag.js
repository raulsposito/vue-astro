import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
  Vue.use(VueGtag, {
    config: { id: "G-TGPNSN8Y4V" },
    appName: 'vue-astro',
  }, app.router);
}
