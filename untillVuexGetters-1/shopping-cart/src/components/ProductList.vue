<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in products" :key="product.title">{{product.title}} - {{product.price}}</li>
        </ul>
    </div>
</template>

<script>
import store from '@/store/index'

export default {

    computed: {
        products(){
            console.log(store.state.products);
            return store.getters.availableProducts
        }
    },

    created() {
       /*Instead of calling shop.getProducts and setting the mutation,below we have decoupled that */
        store.dispatch('fetchProducts')
    }
}
</script>