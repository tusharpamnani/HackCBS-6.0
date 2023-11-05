import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    username:"",
    password:"",
    name:"",
    age:0,
    gender:"",
    contact:"",
    medicalHistory:[],
    bloodGroup:"",
    disabled:false
}

const userDetails = createSlice({
    name:"userSlice",
    initialState:initialState,
    reducers: {
        changeDetails: (state, action) => {
            const { name, value } = action.payload;
            alert(name + value)
            console.log(state.name)
            return {
                ...state,
                [name]: value,
            }
            
        }
    }
})


export const {changeDetails} = userDetails.actions
export default userDetails.reducer;
