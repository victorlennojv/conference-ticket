<template>
  <component
    :is="icon"
    :width="width"
    :height="height"
    :fill="color"
  />
</template>

<script setup lang="ts">
import { defineAsyncComponent, computed, defineProps } from "vue";

interface Props {
  name: string;
  width?: string | number;
  height?: string | number;
  color?: string;
}

const props = defineProps<Props>();

const width = computed(() => props.width ?? 24);
const height = computed(() => props.height ?? 24);
const color = computed(() => props.color ?? "white");

const icon = computed(() =>
  defineAsyncComponent(() => import(`@/assets/images/icons/${props.name}.svg`))
);
</script>
