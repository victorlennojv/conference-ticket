<template>
  <div class="base-input">
    <label :for="inputId">
      {{ label }} <span v-if="required" style="color: #e74c3c">*</span>
    </label>
    <input
      :id="inputId"
      name="base-input"
      :value="modelValue"
      type="text"
      :placeholder="placeholder"
      @input="updateValue($event)"
    />
  </div>
</template>

<script setup lang="ts">
  import { useId } from 'vue';

  const { label = 'Input', required = false } = defineProps<{
    label: string;
    placeholder?: string;
    modelValue?: string;
    required?: boolean;
  }>();

  const emit = defineEmits(['update:modelValue']);

  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
  };

  const inputId = useId();
</script>

<style lang="scss" scoped>
  .base-input {
    margin: 15px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 5px;

    label {
      background-color: transparent;
    }

    input {
      background-color: rgba(255, 255, 255, 10%);
      border-radius: $border-radius-base;
      border: 1px solid rgba(255, 255, 255, 20%);
      color: whitesmoke;
      padding: 10px 8px;
      font-weight: $font-weight-bold;
      font-size: $font-size-base;
      width: 100%;
    }
  }
</style>
