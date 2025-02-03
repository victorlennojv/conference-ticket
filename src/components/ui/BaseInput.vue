<template>
  <div class="base-input">
    <label for="base-input"> {{ label }} </label>
    <input :value="modelValue" @input="updateValue($event)"type="text" id="base-input" :placeholder="placeholder">
  </div>
</template>

<script setup lang="ts">
  const {
    label = 'Input',
  } = defineProps<{ label: string, placeholder?: string, modelValue?: string }>();

  const emit = defineEmits(['update:modelValue']);

  const updateValue = (event: Event) => {
    emit('update:modelValue', (event.target as HTMLInputElement).value);
  };
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
