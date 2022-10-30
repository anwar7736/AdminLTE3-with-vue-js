import axios from 'axios';

export const auth = {
    state:{
        auth_status : false,
        auth_token : '',
        user_info : {

        }
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
                axios.post('/login', loginData)
                .then(res=>{
                    context.commit("SET_AUTH_STATUS", "");
                    context.commit("SET_AUTH_TOKEN", "");
                    context.commit("SET_USER_INFO", "");
					resolve(res);
                })
                .catch(err=>{
					reject(err);
                })
            })
            
        }
    },
    mutations:{
        SET_AUTH_STATUS(state, status)
        {
            state.auth_status = status;
        },
        SET_AUTH_TOKEN(state, token)
        {
            state.auth_token = token;
        },
        SET_USER_INFO(state, info)
        {
			state.user_info = info;
        }
    }
}