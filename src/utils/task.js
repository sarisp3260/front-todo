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