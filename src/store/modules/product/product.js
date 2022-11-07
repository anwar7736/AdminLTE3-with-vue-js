import axios from 'axios';
import baseURL from '../baseURL';
axios.defaults.baseURL = baseURL;
export const product = {
    state: {
        cartItems: [],
    },
    getters: {
        Item_Count(state)
        {
            return state.cartItems.length;
        },
        Cart_Item(state)
        {
            return state.cartItems;
        },
        Total_Price(state)
        {
            let total_price = 0;
            state.cartItems.map(i=> total_price += (i.price * i.quantity));
            return total_price;
        }
    },
    actions:{
        Product_List()
        {
            return new Promise((resolve, reject)=>{
                axios.get('admin/products')
                .then(res=>{
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        }, 
        AddToCart(context, item)
        {
            context.commit("Add_Cart_item", item);
        }, 
        IncreaseQty(context, id)
        {
            context.commit("IncreaseQty", id);
        }, 
        DecreaseQty(context, id)
        {
            context.commit("DecreaseQty", id);
        }, 
        RemoveItem(context, id)
        {
            context.commit("RemoveItem", id);
        }, 

        Checkout(context)
        {
            axios.defaults.headers['Authorization'] = 'Bearer ' + context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject)=>{
                axios.post('checkout', context.state.cartItems)
                .then(res=>{
                    context.commit("ClearItem");
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
        }
        
},
mutations: {
    Add_Cart_item(state, item)
    {
        let cartItems = state.cartItems;
        let bool =  cartItems.some(i=> i.id == item.id);
       if(bool)
       {
            let index = cartItems.findIndex(i => i.id == item.id);
            cartItems[index]['quantity'] += 1;
       }
        else state.cartItems.push({...item, quantity: 1});
    },
    IncreaseQty(state, id)
    {
        let cartItems = state.cartItems;
        let index = cartItems.findIndex(i => i.id == id);
        cartItems[index]['quantity'] += 1;
    },
    DecreaseQty(state, id)
    {
        let cartItems = state.cartItems;
        let index = cartItems.findIndex(i => i.id == id);
        if(cartItems[index]['quantity'] > 1)
        {
            cartItems[index]['quantity'] -= 1;
        }
        
    },
    RemoveItem(state, id)
    {
        let cartItems = state.cartItems;
        let index = cartItems.findIndex(i => i.id == id);
        cartItems.splice(index,1);
    },
    ClearItem(state)
    {
        state.cartItems = [];
    }
}
}