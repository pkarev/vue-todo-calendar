<template>
<div class="todo-item">
    <Checkbox class="todo-item__checkbox" v-model="isCheckboxChecked" disabled>Выпонить задание</Checkbox>
    <TextInput class="todo-item__input" :value="value" @input="onInput" placeholder="Текст" @keyup.enter="onInputKeyup"/>
</div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
import Checkbox from '@/components/checkbox/Checkbox.vue';
import TextInput from '@/components/text-input/TextInput.vue';

@Component({
    components: {Checkbox, TextInput}
})
export default class TodoItem extends Vue
{
    @Prop({required: true, type: String}) value: string;
    isCheckboxChecked: boolean = false;

    private onInputKeyup(): void
    {
        this.$emit('pressenter')
    }

    private onInput($event): void
    {
        this.$emit('input', $event.target.value)
    }

}
</script>

<style scoped>
.todo-item__input {
    width: 175px;
    margin-left: 36px;
    margin-top: 14px;
}
</style>
