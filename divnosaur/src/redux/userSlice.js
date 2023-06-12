import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    name: "",
    country: "",
    age: "",
    experience: "",
    hobbies: "",
    email: "",
    image: "",
    searchTerm: "",
    filteredUsers: [],
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
        setInUsers: (state, action) => {
            state.users = action.payload
        },
        /* updateSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }, */
        filterUsers: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const filteredUsers = state.users.filter((user) => {
              return (
                user.name.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
              );
            });
            state.filteredUsers = filteredUsers;
          },
              
          updateSearchTerm: (state, action) => {
            const searchTerm = action.payload.toLowerCase();
            const filteredUsers = state.users.filter((user) => {
              return (
                user.name.toLowerCase().includes(searchTerm) ||
                user.email.toLowerCase().includes(searchTerm)
              );
            });
            state.searchTerm = action.payload;
            state.filteredUsers = filteredUsers;
          },
                
    }
    
},
)

export const { addUser, changefields, updateAge, updateCountry, updateEmail, updateExperience, updateHobbies, updateImage, updateName, setInUsers, updateSearchTerm, filterUsers } = userSlice.actions;
export default userSlice.reducer; 