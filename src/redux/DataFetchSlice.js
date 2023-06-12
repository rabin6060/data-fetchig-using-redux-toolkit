import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const datafetch = createAsyncThunk('data/fetch',
        async ()=>{
            const response = await fetch("https://jsonplaceholder.typicode.com/posts")
            const data = await response.json()
            return data
        })


const dataFetchSlice = createSlice({
    name: 'dataFetch',
    initialState:{
        posts:[],
    },
    extraReducers: (builder)=> {
        builder
        .addCase(datafetch.pending,(state)=>{
            state.loading = true
        })
        .addCase(datafetch.fulfilled,(state,action)=>{
            state.posts=action.payload
            state.loading=false
            
        })
        .addCase(datafetch.rejected,(state)=>{
            state.loading = false
        })
    }

})

export default dataFetchSlice.reducer