import {Vue, Component} from 'vue-property-decorator';
import {Store} from '@/store/store';
import CalendarModule from '@/store/modules/calendar';
import {useModule, useStore} from 'vuex-simple';
import {DAY_NAMES, MONTH_NAMES, formatDateToDdString, getMonthDays} from './utils';

@Component
export default class Calendar extends Vue
{
    public store: Store = useStore(this.$store);
    public calendar?: CalendarModule = useModule(this.$store, ['calendar']);

    public commitSetActiveDate(date): void
    {
        return this.store.calendar.setActiveDate(date);
    }

    private dayNames: Array<string> = DAY_NAMES;

    private get activeDate(): Date
    {
        return this.store.calendar.activeDate;
    }

    private get monthDays(): Array<string>
    {
        return getMonthDays(this.store.calendar.date);
    }

    private get monthMame(): string
    {
        return MONTH_NAMES[this.store.calendar.date.getMonth()];
    }

    private get year(): number
    {
        return this.store.calendar.date.getFullYear();
    }

    private dayClass(date): Record<string, boolean>
    {
        return {
            'calendar__day_active': this.formattedDate(date) === this.formattedDate(this.activeDate),
            'calendar__day_busy': this.store.todos.todos[this.formattedDate(date)],
        }
    }

    private formattedDate(dateString): string
    {
        return dateString ?
            formatDateToDdString(new Date(dateString)) :
            '';
    }
}
