<template>
  <div class="upload-file">
    <p> {{ uploadText }}</p>
    <DropZone>
      <div class="upload-file__area">
          <input type="file" id="upload-input" hidden/>
          <label for="upload-input">
            <UploadIcon width="28" height="28" />
          </label>
          <p>Drag and drop or click to upload</p>
      </div>
    </DropZone>
    <div class="upload-file__information">
      <AttentionIcon width="16" height="16" /> <span> {{ attentionText }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import AttentionIcon from '@/assets/images/icons/attention.svg';
import UploadIcon from '@/assets/images/icons/upload.svg'
import DropZone from '@/components/DropZone.vue'

interface Props {
  attentionText?: string;
  uploadText?: string;
}
const {
  uploadText = 'Upload',
  attentionText = 'teste testes tes ts ets etsets e'
} = defineProps<Props>();

</script>

<style lang="scss" scoped>
.upload-file {
  margin: 4px;
  text-align: left;

  & label {
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255, 10%);
    border-radius: $border-radius-base;
    border: 1px solid rgba(255,255,255, 10%);
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
  }

  &__area {
    background-color: rgba(255,255,255, 5%);
    border-radius: $border-radius-base;
    border: 2px dashed rgba(255,255,255, 20%);
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 130px;
    margin-top: 6px;
  }

  &__information {
    display: flex;
    font-size: $font-size-sm;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
}

</style>
