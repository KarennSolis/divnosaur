import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import followerReducer from "./followerSlice";


export const store = configureStore ({
    reducer: {
        user: userReducer,
        follower : followerReducer,
    },

});


  

store.subscribe(() => {
    console.log(store.getState());
  });