import { configureStore } from "@reduxjs/toolkit";
import userReducer, { filterUsers, updateSearchTerm } from "./userSlice";
import followerReducer from "./followerSlice";


export const store = configureStore({
    reducer: {
        user: userReducer,
        follower: followerReducer,
    },

});




store.subscribe(() => {
    console.log(store.getState());
});

/* console.log(store.dispatch(filterUsers()))
console.log(store.dispatch(updateSearchTerm())) */