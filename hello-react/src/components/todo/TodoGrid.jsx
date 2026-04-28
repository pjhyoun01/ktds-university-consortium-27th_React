import {TodoContext} from "./context/TodoContext.jsx";

export const TodoGrid = ({children}) => {
    return (
        <ul className="tasks">
            <TodoContext.Provider value={{componentName: 'TodoGrid'}}>
                {children}
            </TodoContext.Provider>
        </ul>
    )
};