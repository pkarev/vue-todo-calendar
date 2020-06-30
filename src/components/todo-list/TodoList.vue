<style src="./TodoList.scss" lang="scss" scoped></style>
<script src="./TodoList.ts" lang="ts"></script>

<template>
<div class="todo-list">
    <span class="todo-list__title">События</span>
    <ul class="todo-list__list">
        <li class="todo-list__item">
            <TodoItem class="todo-list__item"
                :key="lastId"
                v-model="newTodo"
                @pressenter="onAddTodo"
            />
        </li>
        <li class="todo-list__item" v-if="dayTodos">
            <TodoItem v-for="(todoText, id) in dayTodos" :key="id"
                :id="id"
                :value="todoText"
                class="todo-list__item"
                @input="updateTodos(id, ...arguments)"
            />
        </li>
    </ul>
</div>
</template>
