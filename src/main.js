import Vue from 'vue'

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';

Vue.config.productionTip = false

 new Vue({
   comments : {
     FriendContact
   },
   render: h => h(App),
 }).$mount('#app')