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
// import store from '@/store/index'

export default {

    data(){
        return{
            loading: false
        }
    },

    computed: {
        /*This will call second*/
        products(){
            console.log(this.$store.state.products);
            return this.$store.getters.availableProducts
        }
    },

    created() {
        /*this methpd will call first
       /*Instead of calling shop.getProducts and setting the mutation,below we have decoupled that */
       this.loading = true
        this.$store.dispatch('fetchProducts')
        .then(() => this.loading = false)
    }
}
</script>