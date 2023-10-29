import {createSlice} from "@reduxjs/toolkit";


const Slice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state,action) => {
            state.push(action.payload)
        },
    }
})

export const {addTodo} = Slice.actions;
export default Slice;