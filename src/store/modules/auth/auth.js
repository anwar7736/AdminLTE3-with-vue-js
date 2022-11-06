import axios from 'axios';
import baseURL from '../baseURL';
axios.defaults.baseURL = baseURL;
export const auth = {
    state:{
        auth_status : false,
        auth_token : '',
        user_info : {},
    },
    getters:{
        GET_AUTH_STATUS(state)
        {
            return state.auth_status            
        },
        GET_AUTH_TOKEN(state)
        {
            return state.auth_token
        },
        GET_USER_INFO(state)
        {
            return state.user_info
        }
    },
    actions:{
        LOGIN(context, loginData)
        {
            return new Promise((resolve, reject)=>{
                axios.post('admin/login', loginData)
                .then(res=>{
                    context.commit("SET_AUTH_INFO", res.data);
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        }, 
        LOGOUT(context)
        {
            axios.defaults.headers['Authorization'] = 'Bearer ' + context.getters.GET_AUTH_TOKEN;
            return new Promise((resolve, reject)=>{
                axios.get('admin/logout')
                .then(res=>{
                    context.commit("SET_AUTH_LOGOUT");
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        },
        REGISTER(context, registerData)
        {
            return new Promise((resolve, reject)=>{
                axios.post('user-register', registerData)
                .then(res=>{
                    context.commit("SET_AUTH_INFO", res.data);
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        },
        EMAIL(context, emailData)
        {
            return new Promise((resolve, reject)=>{
                axios.post('admin/email-verification', emailData)
                .then(res=>{
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        },
        RESET(context, resetData)
        {
            return new Promise((resolve, reject)=>{
                axios.post('admin/reset-password', resetData)
                .then(res=>{
					resolve(res.data);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        },
    },
    mutations:{
        SET_AUTH_INFO(state, data)
        {
            state.auth_status = true;
            state.auth_token = data.access_token;
            state.user_info = data.user;
        },
        SET_AUTH_LOGOUT(state)
        {
            state.auth_status = false;
            state.auth_token = '';
            state.user_info = {};
        }
    }
}