import {Vue, Component} from 'vue-property-decorator';
import {Store} from '@/store/store';
import {useModule, useStore} from 'vuex-simple';
import TodoItem from '@/components/todo-item/TodoItem.vue';
import CalendarModule from '@/store/modules/calendar';
import TodosModule from '@/store/modules/todos';
import {formatDateToDdString} from '@/components/calendar/utils';

@Component({
    components: {TodoItem}
})
export default class TodoList extends Vue
{
    public store: Store = useStore(this.$store);
    public newTodo: string = '';

    public addTodo(): void
    {
        this.store.todos.addTodo({
            day: this.activeDate,
            value: this.newTodo
        });
    }

    public updateTodos(id, value): void
    {
        this.store.todos.updateTodos({
            id,
            day: this.activeDate,
            value,
        });
    }

    private onAddTodo(): void
    {
        this.addTodo();
        this.newTodo = '';
    }

    private get activeDate(): string
    {
        return formatDateToDdString(new Date(this.store.calendar.activeDate));
    }

    private get dayTodos(): TodoList
    {
        return this.store.todos.todos[`${this.activeDate}`];
    }

    private get lastId(): number
    {
        return this.store.todos.lastId;
    }
}
