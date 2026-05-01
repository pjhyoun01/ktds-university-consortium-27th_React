import {createSlice} from "@reduxjs/toolkit";

// reduxToolkit slice store 생성
export const todoSlice = createSlice({
    name: "todo-slice", //action의 type으로 사용되는 이름
    initialState: { // todo-slice가 사용할 초기 state 값
        list: [],
    },
    reducers: {
        refresh(store, action) {
            // store의 메모리 주소는 바뀌면 안됨
            // initialState의 list의 값을 변경
            store.list = action.payload;
        },
        doneItem(store, action) {
            // action ==> done 처리할 todo의 ID가 전달
            // store.list에서id가 action과 가은 todo의 인덱스를 찾아온다
            const index = store.list.findIndex(todo => todo.id === action.payload);
            store.list[index].done = true;
        },
        allDone(store) {
            store.list = store.list.map(todo => ({...todo, done: true}))
        },
    }
});

export const todoAction = todoSlice.actions;
