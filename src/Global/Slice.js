import { createSlice } from "@reduxjs/toolkit";

export const Slice=createSlice({
    name:"foodApp",
    initialState:{
        users:{
            vendors:[],
            buyers:[],
        },
        loginIn:{
            isLoggedIn:false,
            loggedInUser:{}
        },
        cart: [],
        total: 0,
        QTY: 0,
    },
    reducers:{
        signUp:(state,{payload})=>{
            if(payload.role === "vendors"){
                state.users.vendors.push(payload)
            }else{
                state.users.buyers.push(payload)
            }
        },
        vendorsLogin:(state,{payload})=>{
            const checkVendor=state.users.vendors.findIndex((e)=>e.email === payload.email);
            if(checkVendor !== -1){
                if(state.users.vendors[checkVendor].password !== payload.password){
                    alert ("incorrect password")
                }else{
                    state.loginIn.isLoggedIn=true;
                    state.loginIn.loggedInUser=payload;
                }
            }else{
                alert ("user not found")
            }
        },
        buyersLogin:(state,{payload})=>{
            const checkBuyers=state.users.buyers.findIndex((state)=>state.email === payload.email)
            if(checkBuyers !== -1){
                if(state.users.buyers[checkBuyers].password !== payload.password){
                    alert("incorrect password")
                }else{
                    state.loginIn.isLoggedIn=true;
                    state.loginIn.loggedInUser=payload;
                }
            }else{
                alert("user not found")
            }
        },
        addToCart: (state, {payload})=>{
            const check=state.cart.findIndex((e)=>e.id === payload.id)
            if (check >= 0){
                state.cart[check].QTY += 1  
                state.total = state.cart.reduce((a,e)=> a + e.price * e.QTY,0)
            }else{
               const add={
                ...payload,QTY:1
               }
               state.cart.push(add)
               state.total = state.cart.reduce((a,e)=> a + e.price * e.QTY,0)
            }
        },
        logout:(state)=>{
            state.loginIn.isLoggedIn=false;
            state.loginIn.isLoggedIn={}
        },
        inCreaseQty: (state, { payload }) => {
            state.cart = state.cart.map((e) => {
              if (e?.id === payload?.id) {
                return { ...e, Qty: e.Qty + 1 };
              }
              return e;
            });
            state.total = state.cart.reduce((p, e) => p + e.Qty * e.price, 0);
          },
          decreaseQty: (state, { payload }) => {
            state.cart = state.cart
              .map((e) => {
                if (e.id === payload.id) {
                  return { ...e, Qty: e.Qty - 1 };
                }
                return e;
              })
              .filter((e) => e.Qty > 0);
            state.total = state.cart.reduce((p, e) => p + e.Qty * e.price, 0);
          },
      
          removeCart: (state, { payload }) => {
            state.cart = state.cart.filter((e) => e?.id !== payload?.id);
            state.total = state.cart.reduce((p, e) => p + e.Qty * e.price, 0);
          },
      
          clearCart: (state) => {
            state.cart = [];
            state.total = 0;
          },
    }
})

export const {signUp,buyersLogin,clearCart,vendorsLogin,addToCart,logout,total,removeCart,decreaseQty,inCreaseQty}=Slice.actions;

export default Slice.reducer;