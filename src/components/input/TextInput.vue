<template>
<input class="custom-text-input"
   v-bind="$attrs"
   v-on="listeners"
   @input="handleInput"
   type="text"
   :value="value"
>
</template>

<script lang="ts">
import {Vue, Component, Model} from 'vue-property-decorator';

@Component
export default class TextInput extends Vue
{
    @Model('input') value: string;

    get listeners(): object
    {
        return {
            ...this.$listeners,
            input: this.handleInput,
        };
    }

    handleInput(evt): void
    {
        this.$emit(evt.target.value);
    }
}
</script>

<style lang="scss" scoped>
.custom-text-input {
    font-size: 14px;
    line-height: 18px;
    color: #BFC4CC;
    padding: 6px 14px;
    background: #FFFFFF;
    border: 1px solid #D8DCE6;
    border-radius: 4px;

    &::placeholder {
        color: #BFC4CC;
    }
}
</style>
