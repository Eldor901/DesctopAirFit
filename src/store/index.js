import Vue from "vue";
import Vuex from "vuex";
import auth from "./module/Auth/auth";
import sellers from "./module/Admin/sellers";
import products from "./module/Admin/products";
import uploadfile from "./module/file/uploadfile";
import orders from "./module/Sellers/orders";
import comments from "./module/Sellers/comments";

// import example from './module-example'

Vue.use(Vuex);

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function(/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      auth,
      sellers,
      products,
      uploadfile,
      orders,
      comments
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  });

  return Store;
}
