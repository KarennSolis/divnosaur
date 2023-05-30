import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    country: "",
    age: "",
    experience: "",
    hobbies: "",
    email: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, country, age, experience, hobbies, email } = action.payload;
            state.name = name;
            state.country = country;
            state.age = age;
            state.experience = experience;
            state.hobbies = hobbies;
            state.email = email;
        },
        changefields: (state, action) => {
            state.name = action.payload;
            state.country = action.payload;
            state.age = action.payload;
            state.experience = action.payload;
            state.hobbies = action.payload;
            state.email = action.payload;
        }
    }
})

export const { addUser, changefields } = userSlice.actions;
export default userSlice.reducer; 