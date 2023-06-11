import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    country: "",
    age: "",
    experience: "",
    hobbies: "",
    email: "",
    user_id: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, country, age, experience, hobbies, email, user_id } = action.payload;
            state.name = name;
            state.country = country;
            state.age = age;
            state.experience = experience;
            state.hobbies = hobbies;
            state.email = email;
            state.user_id = user_id;
        },
        changefields: (state, action) => {
            state.name = action.payload;
            state.country = action.payload;
            state.age = action.payload;
            state.experience = action.payload;
            state.hobbies = action.payload;
            state.email = action.payload;
            state.user_id = action.payload;
        },

        updateName: (state, action) => {
            state.name = action.payload;
        },

        updateCountry: (state, action) => {
            state.country = action.payload;
        },
        updateAge: (state, action) => {
            state.age = action.payload;
        },
        updateExperience: (state, action) => {
            state.experience = action.payload;
        },
        updateHobbies: (state, action) => {
            state.hobbies = action.payload;
        },
        updateEmail: (state, action) => {
            state.email = action.payload;
        },

        updateUser_id: (state, action) => {
            state.user_id = action.payload;
        },

    },
},
)

export const { addUser, changefields, updateAge, updateCountry, updateEmail, updateExperience, updateHobbies, updateName, user_id } = userSlice.actions;
export default userSlice.reducer; 