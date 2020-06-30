import {Module} from 'vuex-simple';
import CalendarModule from '@/store/modules/calendar';
import TodosModule from '@/store/modules/todos';

export class Store {
    @Module()
    public calendar: CalendarModule = new CalendarModule();

    @Module()
    public todos: TodosModule = new TodosModule();
}
