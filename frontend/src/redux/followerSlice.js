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
      console.log('setLoggedUserId', action.payload);
    },
    setUsers: (state, action) => {
      state.users = action.payload
      console.log('setUsers', action.payload);
    },
    updateFriendshipStatus: (state, action) => {
      const { friendId, newStatus } = action.payload
      const user = state.users.find(user => user.user_id === friendId)
      if (user) {
        user.status_friendship = newStatus
      }

      console.log('updateFriendshipStatus', action.payload);
    },
    setFollowedUsers: (state, action) => {
      state.followedUsers = action.payload;
      console.log('setFollowedUsers', action.payload);
    },
  },
})



export const { setLoggedUserId, setUsers, updateFriendshipStatus, setFollowedUsers } = followerSlice.actions
export default followerSlice.reducer
