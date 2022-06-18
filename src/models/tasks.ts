export enum TaskStatusEnum {
    PROCESSING,
    DONE
}

export interface ITask {
    id: string
    name: string
    status: TaskStatusEnum
}
