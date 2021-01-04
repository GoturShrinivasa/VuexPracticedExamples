<template>
    <div>
        <h1>Product List</h1>
        <img v-if="loading" src="https://i.imgur.com/JfPpwOA.gif">
        <ul v-else>
            <li v-for="product in products" :key="product.title">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import store from '@/store/index'

export default {

    data(){
        return{
            loading: false
        }
    },

    computed: {
        products(){
            console.log(store.state.products);
            return store.getters.availableProducts
        }
    },

    created() {
       /*Instead of calling shop.getProducts and setting the mutation,below we have decoupled that */
       this.loading = true
        store.dispatch('fetchProducts').then(() => this.loading = false)
    }
}
</script>