<template>
  <div class="user-form">
    <form action="">
      <BaseInput
        v-model="name"
        label="Full Name"
        name="name"
        required
      />
      <BaseInput
        v-model="email"
        label="Email"
        placeholder="example@email.com"
        name="name"
        required
      />
      <BaseInput
        v-model="githubUser"
        label="GitHub Username"
        placeholder="@yourusername"
        name="name"
        required
      />
      <button @click.prevent="onSubmit"> Generate My Ticket </button>
    </form>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import BaseInput from '@/components/ui/BaseInput.vue'

  const name = ref('');
  const email = ref('');
  const githubUser = ref('');

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
  }
}
</style>
