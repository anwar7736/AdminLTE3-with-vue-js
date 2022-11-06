<template>
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <router-link to="/products" class="btn btn-default btn-sm">Go to Product List</router-link>
                    <h2>Cart Summary</h2><hr>
                   <h5>Total Price : {{total_price}}Tk</h5>
                   <h5>Shipping Charge : 50Tk</h5>
                   <h4>Subtotal : {{total_price + 50}}Tk</h4>
                   <center>
                      <button class="btn btn-lg btn-info">Checkout Now!</button>
                   </center>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-body">
                    <h4>Cart Item</h4><hr>
                    <div class="row">
                        <table class="table table-bordered table-hover text-center">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Unit</th>
                                    <th>-</th>
                                    <th>Quantity</th>
                                    <th>+</th>
                                    <th>Remove</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                        <tbody>
                        <tr v-for="item in items" :key="item.id">
                            <td>
                                <h6>{{item.name}}</h6>
                            </td>
                            <td>
                                <h6>{{item.price}}</h6>
                            </td> 
                            <td>
                                <h6><button @click="decreaseQty(item.id)"><i class="fa fa-minus-circle bg-danger"></i></button></h6>
                            </td>
                            <td>
                                <h6>{{item.quantity}}</h6>
                            </td>
                            <td>
                                <h6><button @click="increaseQty(item.id)"><i class="fa fa-plus-circle bg-success"></i></button></h6>
                            </td>
                            <td>
                                <h6><button @click="removeItem(item.id)"><i class="fa fa-trash text-danger"></i></button></h6>
                            </td> 
                            <td>
                                <h6>{{item.price * item.quantity}}</h6>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cart-list',
    computed: {
        items()
        {
            return this.$store.getters.Cart_Item;
        },
        total_price()
        {
            return this.$store.getters.Total_Price;
        }
    },
    methods: {
        increaseQty(id)
        {
            this.$store.dispatch("IncreaseQty", id);
        }, 
        decreaseQty(id)
        {
            this.$store.dispatch("DecreaseQty", id);
        }, 
        removeItem(id)
        {
            this.$store.dispatch("RemoveItem", id);
        },
    }
}
</script>

<style>

</style>