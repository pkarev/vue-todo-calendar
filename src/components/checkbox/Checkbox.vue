<template>
<label class="custom-checkbox">
    <input class="custom-checkbox__input"
       type="checkbox"
       :disabled="disabled"
       :value="value"
       @input="handleInput"
    />
    <span class="custom-checkbox__box" :class="boxClass" aria-hidden="true"></span>
    <span class="custom-checkbox__text">
        <slot></slot>
    </span>
</label>
</template>

<script lang="ts">
import {Vue, Component, Model, Prop} from 'vue-property-decorator';

@Component
export default class Checkbox extends Vue
{
    @Model('input') value: boolean
    @Prop({default: false}) disabled: boolean

    get boxClass(): object
    {
        return {
            'is-checked': this.value,
        }
    }

    handleInput(evt): void
    {
        this.$emit('input', !this.value)
    }
}
</script>

<style lang="scss" scoped>
@import '@/variables.scss';
@import '@/mixins.scss';

.custom-checkbox__input {
    @include visually-hidden;
}

.custom-checkbox {
    display: flex;
    align-items: flex-start;
}

.custom-checkbox__box {
    margin-top: 1px;
    width: 16px;
    height: 16px;

    background: #F2F3F3;
    border-radius: 2px;
    margin-right: 20px;
    flex-shrink: 0;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
        display: none;
        content: '';
        height: 10px;
        width: 6px;
        border-bottom: 2px solid #90D9FA;
        border-right: 2px solid #90D9FA;
        transform-origin: center;
        transform: rotate(45deg);
        margin-top: -2px;
    }

    &.is-checked {
        &::before {
            display: block;
        }
    }
}

.custom-checkbox__text {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    letter-spacing: 0.59375px;
    color: #A2ABBF;
}
</style>
