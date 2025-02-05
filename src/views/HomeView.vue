<script setup lang="ts">
import UploadFile from '@/components/UploadFile.vue'
import UserForm from '@/components/UserForm.vue'
</script>

<template>
  <header>
    <h1> <span> CC </span> - Coding Conference</h1>
    <h2> Your Journey to Coding Conf 2025 Starts Here!</h2>
    <p>Secure your spot at next year's biggest coding conference.</p>
  </header>
  <main>
    <UploadFile upload-text="Upload Avatar"/>
    <UserForm />
  </main>
</template>

<style lang="scss">
header {
  max-width: 600px;
  & > h1 {
    font-weight: $font-weight-bold;
    font-size: $font-size-lg;
    margin-bottom: $spacing-xl;

    & > span {
      color: $primary-color;
      font-weight: $font-weight-bold;
      font-size: $font-size-xxlg;
      line-height: 30px;
    }
  }
  & > h2 {
    font-weight: $font-weight-bold;
    font-size: $font-size-xxlg;
    margin-bottom: $spacing-md;
    line-height: 30px;
  }

  & > p {
    font-size: $font-size-base;
    margin-bottom: $spacing-lg;
  }
}

main {
  min-width: 360px;
  max-width: 400px;
}
</style>
