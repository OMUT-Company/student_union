import {configureStore} from "@reduxjs/toolkit"
import adminReducer from "./Admin/adminSlice"
import contentReducer from "./Content/contentSlice"

export const store = configureStore({
    reducer: {
        admin: adminReducer,
        content: contentReducer
    },
})