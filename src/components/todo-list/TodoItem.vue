<template>
<div class="todo-item">
    <Checkbox class="todo-item__checkbox" v-model="isCheckboxChecked" disabled>Выпонить задание</Checkbox>
    <TextInput class="todo-item__input" v-model="todoText" placeholder="Текст"/>
</div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';
import Checkbox from '@/components/checkbox/Checkbox.vue';
import TextInput from '@/components/input/TextInput.vue';

@Component({
    components: {Checkbox, TextInput}
})
export default class TodoItem extends Vue
{
    isCheckboxChecked = false;
    todoText = '';
}
</script>

<style scoped>
.todo-item__input {
    width: 175px;
    margin-left: 36px;
    margin-top: 14px;
}
</style>
