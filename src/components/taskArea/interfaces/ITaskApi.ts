import { Priority } from "../../CreateTaskForm/enums/priority";
import { Status } from "../../CreateTaskForm/enums/status";

export interface ITaskApi {
    id: string;
    date: string;
    title: string;
    description: string;
    priority: `${Priority}`;
    status: `${Status}`;
}