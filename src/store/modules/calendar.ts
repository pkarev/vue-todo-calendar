import { Mutation, State } from 'vuex-simple';

export default class CalendarModule {
    @State()
    public date: Date;
    public activeDate: Date;

    constructor(date: Date = new Date()) {
        this.date = date;
        this.activeDate = date;
    }

    @Mutation()
    public setActiveDate(date: Date)
    {
        this.activeDate = date;
    }
}
