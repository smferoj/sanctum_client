import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore('auth',  {
 state: () =>({
      token: null,
      user: null,
      errors:"",
 }),

 getters :{
  authenticated(){
    return !!this.token && !!this.user
  },
  getToken(){
    return this.token 
  },
  getUser(){
    return this.user 
  },
  getErrors(){
    return this.errors
  }

 },

 actions:{
    setToken(token){
     this.token = token
    },
    setUser(user){
     this.user = user
    },
  async attempt(token){
    this.setToken(token)
    try {
      let response = await axios.get('/user')
      this.setUser(response.data)
    } catch (error) {
      console.log(error);
    }

  },
   async login(credentials){
     try {
       let response = await axios.post('/auth/login', credentials)
       this.attempt(response.data.access_token);
      //  console.log(response);
     } catch (error) {
        // console.error("Login failed:", e);
        if(error.status === 422){
          this.errors = error.response.data.errors
        }
        if(error.status === 401){
          this.errors = {"email": [error.response.data.message]}
        }
     }
         
    }
 }
});