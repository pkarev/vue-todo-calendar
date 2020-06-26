<template>
<div class="calendar">
    <span class="calendar__title">Декабрь 2019</span>
    <div class="calendar__header">
        <div class="calendar__cell calendar__cell_header" v-for="(dayName, index) in dayNames" :key="index">
            {{ dayName }}
        </div>
    </div>
    <div class="calendar__body">
        <div class="calendar__cell" v-for="date in monthDates">
            <button class="calendar__day" :class="activeClass(date)" type="button">{{ date }}</button>
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
const dayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
const monthDates = [,,,,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]

@Component
export default class Calendar extends Vue
{
    dayNames: Array<string> = dayNames;
    monthDates: Array<undefined | number> = monthDates;

    activeClass(date): object
    {
        return {
            'calendar__day_active': date === 6,
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
@import '@/mixins.scss';

.calendar {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    padding: 30px;
    padding-right: 0;
}

.calendar__title {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.59375px;
    color: #6B7897;
    padding-right: 30px;
}

.calendar__body {
    margin-top: 26px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: repeat(5, 1fr);
    row-gap: 16px;
}

.calendar__header {
    margin-top: 26px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
}

.calendar__cell {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #7C86A2;

    &_header {
        font-weight: 500;
        font-size: 16px;
        line-height: 19px;
        color: rgba(52, 72, 94, 0.536062);
    }
}

.calendar__day {
    @include button-reset;

    &_active {
        position: relative;
        color: white;

        &::before {
            position: absolute;
            display: block;
            content: '';
            width: 32px;
            height: 32px;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            background: linear-gradient(0deg, #7ED5FC 0%, #90D9FA 100%);
            z-index: -1;
        }
    }
}
</style>
