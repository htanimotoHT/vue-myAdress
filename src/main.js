import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG3KIvcMelCmXa6RVgQPN6T8SnRVa96Zk",
  authDomain: "address-vue.firebaseapp.com",
  databaseURL: "https://address-vue.firebaseio.com",
  projectId: "address-vue",
  storageBucket: "address-vue.appspot.com",
  messagingSenderId: "1005597005487",
  appId: "1:1005597005487:web:dd6a66f2232f4049a3665a",
  measurementId: "G-4P0ECSM0V4"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
