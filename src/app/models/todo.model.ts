export class Todo {
    id: number;
    title: string;
    description: string;
    completed: boolean;
    priority: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}