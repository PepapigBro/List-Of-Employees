// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import getImagePath from './shared/helpers/getImagePath'
import UniqueEmployeeIdGenerator from './shared/helpers/UniqueEmployeeIdGenerator'
import Store from './services/Store'
import LocalStorageManager from './services/LocalStorageManager'

Vue.config.productionTip = false

const store = new Store({localstorageManager: new LocalStorageManager()})
Vue.prototype.$store = store
Vue.prototype.$getImagePath = getImagePath
Vue.prototype.$UIdGenerator = new UniqueEmployeeIdGenerator(store.employee)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
