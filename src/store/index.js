import { store } from 'quasar/wrappers';
import { createStore } from 'vuex';
import ratings from './ratings'
import restaurants from './restaurants';
import app from './app';
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const Store = createStore({
    modules: {
      app,
      ratings,
      restaurants,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});