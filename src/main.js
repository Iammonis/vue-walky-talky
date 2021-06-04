import Vue from 'vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire';
import router from './router';
import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);
Vue.use(firestorePlugin);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
