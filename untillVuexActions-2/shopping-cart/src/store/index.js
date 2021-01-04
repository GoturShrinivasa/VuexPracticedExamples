import Vuex, { Store } from 'vuex'
import Vue from 'vue'
import shop from '@/api/shop'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //data
    products: []
  },

  getters: {
    //computed properties
    availableProducts(state, getters) {
      return state.products.filter(product => product.inventory > 2);
    }
  },

  actions: { //=methods
    fetchProducts({commit}) {
      return new Promise((resolve, reject) => {
        //make an Api call
        //call setProduct mutation
        shop.getProducts(products => {
          commit("setProducts", products)
          resolve()
        })
      })
    }
  },

  mutations: {
    setProducts(state, products) {
      //update products
      state.products = products;
    }
  }
});