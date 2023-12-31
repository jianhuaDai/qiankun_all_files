import Vue from "vue"
import Vuex from "vuex"

import user from "./modules/user.js"
import setting from "./modules/setting.js"
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user: user,
    setting: setting
  }
})