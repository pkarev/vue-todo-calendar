const DAY_NAMES = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
const MONTH_NAMES = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Спентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

const getDaysNumberInMonth = (date: Date): number => {
    const year = date.getFullYear();
    const month = date.getMonth();

    return 33 - new Date(year, month, 33).getDate();
}

const getNormalizedWeekDayNumber = (date: Date): number => {
    const number = Number(date.getDay());
    return number === 0 ?
        6 :
        number - 1;
}

const getMonthDays = (date: Date): Array<string> => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysNumber = getDaysNumberInMonth(date);
    const firstDayInMonth = new Date(year, month, 1);
    const emptyCellsNumber = getNormalizedWeekDayNumber(firstDayInMonth);
    const monthDays = getNormalizedWeekDayNumber(date) ? new Array(emptyCellsNumber) : [];

    for (let i = 1; i <= daysNumber; i++) {
        monthDays.push(formatDateToYyyyMmDdString(new Date(year, month, i + 1)));
    }

    return monthDays;
}

const formatDateToYyyyMmDdString = (date: Date): string => {
    return date.toISOString().slice(0,10);
}

const formatDateToDdString = (date: Date): string => {
    return String(date.getDate());
}

export {DAY_NAMES, MONTH_NAMES, getMonthDays, formatDateToDdString};
