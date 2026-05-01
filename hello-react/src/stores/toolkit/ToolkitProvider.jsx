import {configureStore} from "@reduxjs/toolkit";
import {todoSlice} from "./slices/todoSlice.js";
import {Provider} from "react-redux";
// import {articleSlice} from "./slices/articleSlice.js";
// import {userSlice} from "./slices/userSlice.js";

const toolkitStore = configureStore({
    reducer: {
        todo: todoSlice.reducer,
        // article: articleSlice.reducer,
        // user: userSlice.reducer,
    }
})

export const ToolkitProvider = ({children}) => {
    return <Provider store={toolkitStore}>{children}</Provider>;
}