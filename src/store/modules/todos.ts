import { Mutation, State } from 'vuex-simple';

type Todo = {
    id: number,
    value: string,
}

type TodoList = Array<Todo>;

export default class TodosModule {
    @State()
    public todos: object;
    public lastId: number;

    constructor(todos: Record<string, TodoList> = {}, lastId = 0) {
        this.todos = todos;
        this.lastId = lastId;
    }

    @Mutation()
    public updateTodos({day, id, value}): void
    {
        this.todos = {
            ...this.todos,
        }

        this.todos[day][id] = value;
    }

    @Mutation()
    public addTodo({day, value}): void
    {
        this.todos = {
            ...this.todos,
        };

        if (this.todos[day]) {
            this.todos[day][this.lastId] = value
        } else {
            this.todos[day] = {
                [this.lastId]: value,
            }
        }

        this.lastId++;
    }
}
