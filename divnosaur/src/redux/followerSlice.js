// src/reducers/userSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedUserId: null,
  users: []
}

const followerSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoggedUserId: (state, action) => {
      state.loggedUserId = action.payload
    },
    setUsers: (state, action) => {
      state.users = action.payload
    },
    updateFriendshipStatus: (state, action) => {
      const { friendId, newStatus } = action.payload
      const user = state.users.find(user => user.user_id === friendId)
      if (user) {
        user.status_friendship = newStatus
      }
    }
  }
})

export const { setLoggedUserId, setUsers, updateFriendshipStatus } = followerSlice.actions
export default followerSlice.reducer
