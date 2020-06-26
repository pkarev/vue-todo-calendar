<template>
<div class="todo-list">
    <span class="todo-list__title">События</span>
    <ul class="todo-list__list">
        <li class="todo-list__item">
            <TodoItem v-for="todo in todos" :key="todo" class="todo-list__item"/>
        </li>
    </ul>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import TodoItem from '@/components/todo-list/TodoItem.vue';

@Component({
    components: {TodoItem}
})
export default class TodoList extends Vue
{
    todos = [1, 2]
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';

.todo-list {
    border-radius: $border-radius;
    box-shadow: $box-shadow;
    padding: 30px;
}

.todo-list__title {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.59375px;
    color: #8C96AB;
}

.todo-list__list {
    margin: 0;
    margin-top: 16px;
    padding: 0;
    list-style-type: none;
}

.todo-list__item {
    margin-top: 16px;

    &:first-child {
        margin-top: 0;
    }
}
</style>
