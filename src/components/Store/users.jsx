import { createSlice } from "@reduxjs/toolkit";
import { addToNewsletter } from "./Thunks/thunk";

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        action:{}
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(addToNewsletter.fulfilled, (state, action) => {
            state.action = action.payload
        })
    }
})

export default userSlice.reducer