import { defineStore } from 'pinia'
import {ITask} from "../models/tasks";

interface ITasksStore {
    tasks: ITask[]
}

export const useTasksStore = defineStore({
    id: 'tasks',

    state: (): ITasksStore => ({
        tasks: []
    }),

    actions: {
        setTasks(payload: ITask[]) {
            this.tasks = payload
        },
        addTask(payload: ITask) {
            this.tasks.push(payload)
        },
        updateByInstance(payload: ITask) {
            const _index = this.tasks.findIndex(task => task.id === payload.id)
            if(_index !== -1) {
                this.tasks[_index] = payload
            }
        }
    }
})
