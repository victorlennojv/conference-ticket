<template>
  <div class="user-form">
    <form @submit.prevent="handleSubmit">
      <BaseInput v-model="form.name" label="Full Name" name="name" required @input="resetError" />
      <BaseInput
        v-model="form.email"
        label="Email"
        placeholder="example@email.com"
        name="name"
        required
        @input="resetError"
      />
      <BaseInput
        v-model="form.githubUser"
        label="GitHub Username"
        placeholder="@yourusername"
        name="name"
        required
        @input="resetError"
      />
      <button type="submit">Generate My Ticket</button>
    </form>
    <div v-if="hasError" class="user-form__error">
      <p>Please, fill in the required fields.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'

interface Form {
  name: string;
  email: string;
  githubUser: string;
}

  import { reactive, ref } from 'vue';
  import BaseInput from '@/components/ui/BaseInput.vue';
  import { useUserForm } from '@/stores/user.ts';

  const store = useUserForm();
  const hasError = ref(false);
  const form = reactive<Form>({
    name: '',
    email: '',
    githubUser: '',
  });

const emit = defineEmits(['submit']);

  const handleSubmit = () => {
    if (validateForm(form)) {
      store.setFormData(form);
      emit('submit')
      return;
    }
    hasError.value = true;
  };

  const validateForm = (form: Form) => {
    return form.name && form.email && form.githubUser;
  };

  const resetError = () => {
    hasError.value = false;
  };
</script>

<style lang="scss" scoped>
  .user-form {
    & button {
      border-radius: $border-radius-base;
      padding: 10px 4px;
      width: 100%;
      background-color: $primary-color;
      border: none;
      font-size: $font-size-base;
      font-weight: $font-weight-bold;
      margin-top: $spacing-sm;
      cursor: pointer;

      &:hover {
        background-color: $primary-color-hover;
      }
    }

    &__error {
      margin-top: $spacing-sm;
      color: $danger-color;

      > p {
        font-weight: $font-weight-bold;
      }
    }
  }
</style>
