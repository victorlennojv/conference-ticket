<script setup lang="ts">
  import { onMounted, onUnmounted } from 'vue';
  const emit = defineEmits(['file-dropped']);

  function onDrop(e: DragEvent) {
    emit('file-dropped', [...(e.dataTransfer?.files || '')]);
  }

  function preventDefaults(e: Event) {
    e.preventDefault();
  }

  const events = ['dragenter', 'dragover', 'dragleave', 'drop'];

  onMounted(() => {
    events.forEach((eventName) => {
      document.body.addEventListener(eventName, preventDefaults);
    });
  });

  onUnmounted(() => {
    events.forEach((eventName) => {
      document.body.removeEventListener(eventName, preventDefaults);
    });
  });
</script>

<template>
  <div @drop.prevent="onDrop">
    <slot></slot>
  </div>
</template>
