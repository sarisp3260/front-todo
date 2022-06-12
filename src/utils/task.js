import axios from "axios";
import { TASK_ROUTE } from "./routes";

export const getTasks = async () => {
    try {
        const response = await axios.get(TASK_ROUTE);
        /* const data = await response.json(); */
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const createTask = async (task) => {
    try {
        const response = await axios.post(TASK_ROUTE, {title: task, completed: false});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = async (task, edit) => {
    try {
        const response = await axios.put(TASK_ROUTE + `/${task._id}`, {title: edit});
        return response;
    } catch (error) {
        console.log(error);
    }
}
export const updateCompleted = async (task, completed) => {
    try {
        const response = await axios.put(TASK_ROUTE + `/${task._id}`, {completed: completed});
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (task) => {
    try {
        const response = await axios.delete(TASK_ROUTE + `/${task}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}