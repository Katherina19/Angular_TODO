export class Task{
    id: number
    task: string;
    done: boolean;
     
    constructor(id: number, task: string) {
        this.id = id;
        this.task = task;
        this.done = false;
    }
}