import { createSlice } from "@reduxjs/toolkit"


const CardSlice = createSlice({
    name: 'posts',
    initialState: [],
    reducers:{
        addCard(state,action){
            state.push(action.payload)
        },
        removeCard(state,action){
           return state.filter((item)=>item.id!==action.payload)
        }
    }
})


export const {addCard,removeCard} = CardSlice.actions
export default CardSlice.reducer