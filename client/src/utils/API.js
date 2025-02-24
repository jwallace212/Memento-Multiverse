import axios from 'axios';

// eslint-disable-next-line import/no-anonymous-default-export
export default {

    getOneFranchise: (franchiseId) => {
        return axios.get('/api/products/fran/' + franchiseId)
    },

    getAll: () => {
        return axios.get('/api/products/')
    },

    getOneItem: (itemId) => {
        return axios.get('/api/products/' + itemId);
    },

    addToCart: (item) => {
        console.log('add to cart');
        return axios.post('/addToCart', item);
    },

    renderCart: (id) => {
        return axios.get('/userCart/', id);
    },

    deleteFromCart: (id) => {
        console.log('Item has been removed from cart');
        return axios.delete('/deleteFromCart' + id);
    },

    updateCartQty: (qty) => {
        console.log('Cart has been updated', qty);
        return axios.put('/updateCartQty', qty);
    },

    createCheckout: (total) => {
        console.log('Creating your order', total);
        return axios.post('/createCheckout', total);
    },

    getAllTransactions: () => {
        return axios.get('/api/transactions');
    },
    //bodies
//user_id:parseInt(bodies.user_id)
    create: (body) => {   // TODO: make it work
        return axios.post('/api/transactions', { product_id: body.id, franchise_id: body.franchise_id, user_id: body.user_id, price: parseFloat(body.fake_price), quantity: 1 });
    },

    // postTransactions: (id,user_id,fake_price) => {   // TODO: make work
    //     return axios.post('/api/transactions', id);
    // },

    getFranchises: () => {
        return axios.get('/api/franchise');
    },
    
    logIn: (userInfo) => {
        return axios.post('/api/users/login', userInfo);
    },

    logOut: () => {
        return axios.post('/api/users/logout');
    },

    signUp: (userInfo) => {
        return axios.post('/api/users/signup', userInfo);
    },

    loggedIn: () => {
        return axios.get('/api/users/user')
    }
}