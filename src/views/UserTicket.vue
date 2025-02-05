<script setup lang="ts">
import { useUserForm } from '@/stores/user.ts';
import { computed, onMounted, onUnmounted, ref } from 'vue'

const store = useUserForm();
const avatarPreview = ref<string | null>(null);


const FirstAndLastName = computed(() => {
  const fullName = store.name.split(' ')
  if (fullName.length) {
    return fullName.length > 1
      ? fullName[0] + ' ' + fullName[fullName.length - 1]
      : fullName[0]
  }
  return ''
})

const setAvatarPreview = (file: File) => {
  if (avatarPreview.value) URL.revokeObjectURL(avatarPreview.value);
  avatarPreview.value = URL.createObjectURL(file);
}

onMounted( () => {
  if (store.avatar) {
    setAvatarPreview(store.avatar)
  }
})

onUnmounted(() => {
  if (avatarPreview.value) {
    URL.revokeObjectURL(avatarPreview.value);
  }
});
</script>

<template>
  <header>
    <h1> <span> CC </span> - Coding Conference</h1>
    <h2> Congratulations, {{ store.name }}.</h2>
    <p>We've emailed your ticket to <br/>
      <span style="color: #f16856"> {{ store.email }}</span> and will updates in <br/>
      the run up to the event.
    </p>
  </header>
  <main class="user-ticket">
    <div class="user-ticket__container">
      <div class="user-ticket__header">
        <h1> Coding Conf.</h1>
        <p> Feb 22, 2025 / Feira de Santana, BA</p>
      </div>
      <div class="user-ticket__ticket-summary">
        <div class="user-ticket__avatar">
          <img :src="avatarPreview || '#'" alt="avatar" />
        </div>
        <div class="user-ticket__personal-info">
          <h3>{{ FirstAndLastName }}</h3>
          <p>{{ store.githubUser }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
header {
  max-width: 600px;
  & > h1 {
    font-weight: $font-weight-bold;
    font-size: $font-size-lg;
    margin-bottom: $spacing-xlg;

    & > span {
      color: $primary-color;
      font-weight: $font-weight-bold;
      font-size: $font-size-xxlg;
      line-height: 30px;
    }
  }
  & > h2 {
    font-weight: $font-weight-bold;
    font-size: 38px;
    margin-bottom: $spacing-md;
    line-height: 38px;
  }

  & > p {
    font-size: $font-size-base;
    margin-bottom: $spacing-lg;
    margin-top: $spacing-xlg;
  }
}

.user-ticket {
  min-width: 360px;
  max-width: 440px;
  margin-top: $spacing-xlg;

  &__container {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: $spacing-md;
    min-width: 375px;
    height: 210px;
    background-image: url('@/assets/images/backgrounds/pattern-ticket.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
  }

  &__header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px 3px;
    & h1 {
      font-size: $font-size-lg;
      font-weight: $font-weight-bold;
    }

    & p {
      font-size: $font-size-sm;
    }
  }

  &__avatar {
  margin-bottom: $spacing-sm;
    & img {
      width: 70px;
      height: 70px;
      border-radius: $border-radius-large;
    }
  }

  &__ticket-summary {
    display: flex;
    gap: $spacing-md;
  }

  &__personal-info {
    height: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}
</style>
