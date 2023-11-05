import { configureStore } from "@reduxjs/toolkit";
import UserDataSlice from "./UserDataSlice";

export  const store = configureStore({
    name: "",
    reducer: {
        businessFormReducer: UserDataSlice,
    }
})
