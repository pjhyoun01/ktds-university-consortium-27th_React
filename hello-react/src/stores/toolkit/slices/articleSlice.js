import {createSlice} from "@reduxjs/toolkit";

// reduxToolkit slice store 생성
export const articleSlice = createSlice({
    name: "article-slice",
    initialState: {
        list: [],
        token: "",
    },
    reducers: {
        loadArticles(state, action) {
            state.list = action.payload;
        },
        setToken(state, action) {
            state.token = action.payload;
        }
    }
});

export const articleActions = articleSlice.actions;