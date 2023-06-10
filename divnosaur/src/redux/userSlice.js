import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    country: "",
    age: "",
    experience: "",
    hobbies: "",
    email: "",
    image: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, country, age, experience, hobbies, email, image } = action.payload;
            state.name = name;
            state.country = country;
            state.age = age;
            state.experience = experience;
            state.hobbies = hobbies;
            state.email = email;
            state.image = image;
        },
        changefields: (state, action) => {
            state.name = action.payload;
            state.country = action.payload;
            state.age = action.payload;
            state.experience = action.payload;
            state.hobbies = action.payload;
            state.email = action.payload;
            state.image = action.payload;
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
        updateImage: (state, action) => {
            state.image = action.payload;
        },

    },
},
)

export const { addUser, changefields, updateAge, updateCountry, updateEmail, updateExperience, updateHobbies, updateImage, updateName } = userSlice.actions;
export default userSlice.reducer; 