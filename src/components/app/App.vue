<template>
<div class="container">
  <div class="app">
    <Calendar class="app__calendar"/>
    <TodoList class="app__todo-list"/>
  </div>
</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Calendar from '@/components/calendar/Calendar.vue';
import TodoList from '@/components/todo-list/TodoList.vue';

@Component({
  components: {
    Calendar,
    TodoList
  }
})
export default class App extends Vue {}
</script>

<style src="./App.scss" lang="scss"></style>
