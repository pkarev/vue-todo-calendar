<style src="./Calendar.scss" lang="scss" scoped></style>
<script src="./Calendar.ts" lang="ts"></script>

<template>
<div class="calendar">
    <span class="calendar__title">{{ monthMame }} {{ year }}</span>
    <div class="calendar__header">
        <div class="calendar__cell calendar__cell_header" v-for="(dayName, index) in dayNames" :key="index">
            {{ dayName }}
        </div>
    </div>
    <div class="calendar__body">
        <div class="calendar__cell" v-for="date in monthDays">
            <button class="calendar__day"
                :class="dayClass(date)"
                type="button"
                @click="commitSetActiveDate(date)"
            >
                {{ formattedDate(date) }}
            </button>
        </div>
    </div>
</div>
</template>
