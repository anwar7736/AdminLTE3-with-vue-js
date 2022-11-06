<template>
    <div>
        <div class="text-center h2 m-3">
            <h5>Total Cart Item : </h5><router-link to="/cart-list"><i class="fa fa-shopping-cart"></i><sup><span class="badge bg-danger">{{itemCount}}</span></sup></router-link>
        </div>
        <div class="row m-2">
            <div class="col-md-2 card m-2" v-for="product in products" :key="product.id">
                <div class="card-title">
                    <p>{{product.name}}</p>
                </div>
                <div class="card-body">
                    <h4>{{product.price}}Tk</h4>
                    <button class="btn btn-success btn-sm" @click="addToCart(product)">Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            products: {},
        }
    },
    methods: {
        addToCart(item)
        {
            this.$store.dispatch("AddToCart", item);
        }
    },
    created()
    {
        this.$store.dispatch("Product_List")
        .then(res=>{
            this.products = res;
        })

    },
    computed: {
        itemCount()
        {
            return this.$store.getters.Item_Count;
        }
    }
}
</script>

<style scoped>
    .badge{
        font-size: 10px;
    }
</style>