import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState =[
    {
        id:nanoid(),
        name:'Ann',
        number:'24558',
        email:'jkshdfi@mail.ru'
    }
]

const {actions, reducer} = createSlice({
    name:'contacts',
    initialState: JSON.parse(localStorage.getItem('contacts', initialState)) || initialState,
    reducers:{
        add:(state, {payload})=>{
            const newContact = {
                id:nanoid(),
                name: payload.name,
                number: payload.number,
                email: payload.email
            }
             state.push(newContact);
        },
        deleteItem:(state, {payload})=>{
            return state.filter((item)=> item.id !== payload.id)
        },
        editItem:(state, {payload})=>{
            return state.map((item)=> item.id === payload.id ? payload : item)
        }
    }
})


export default reducer;
export const {add, deleteItem, editItem} = actions;

export const getContacts = (state)=> state.contacts