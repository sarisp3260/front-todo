import { createContext, useReducer } from "react";
import TaskReducer from "./TaskReducer";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [state, dispatch] = useReducer(TaskReducer, {
        tasks: [],
    });

    return (
        <TaskContext.Provider value={{ state, dispatch }}>
            {children}
        </TaskContext.Provider>
    )
}