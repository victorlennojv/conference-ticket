<template>
  <div class="upload-file">
    <p>{{ uploadText }}</p>
    <DropZone @file-dropped="onDrop">
      <div v-if="!avatar" class="upload-file__area">
        <input id="upload-input" type="file" @change="onFileSelected" accept="image/png, image/jpeg, image/jpg" hidden />
        <label for="upload-input">
          <SvgIconsBase name="upload" width="28" height="28" />
        </label>
        <p>Drag and drop or click to upload</p>
      </div>
      <div v-else class="upload-file__area">
        <img class="upload-file__avatar" :src="avatarPreview || '#'" alt="avatar" />
        <SvgIconsBase @click="onDeleteAvatar" class="upload-file__delete-icon" name="trash" fill="#f16856" width="20" height="20" />
      </div>
    </DropZone>
    <div>
      <div class="upload-file__information">
        <SvgIconsBase name="attention" fill="none" width="16" height="16" /> <span> {{ attentionText }}</span>
      </div>
        <p class="upload-file__upload-error" v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
  import DropZone from '@/components/DropZone.vue';
  import { useFileValidator } from '@/composables/useValidateFile.ts';
  import { ref, onUnmounted } from 'vue';
  import SvgIconsBase from '@/components/ui/icons/SvgIconsBase.vue'

  interface Props {
    attentionText?: string;
    uploadText?: string;
  }

  const { uploadText = 'Upload', attentionText = 'Upload your photo (JPG, JPEG or PNG, max size: 1MB' } =
    defineProps<Props>();

  const { isValid, errorMessage, validateFile } = useFileValidator(['jpg', 'png', 'jpeg'], 1);

  const avatar = ref<File | null>(null);
  const avatarPreview = ref<string | null>(null);

  const onDrop = (file: File[]) => {
    validateFile(file[0]);

    if (isValid.value) {
      setAvatarPreview(file[0])
    }
  };

  const onFileSelected = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (!input.files || !input.files.length) { return }

    const file = input.files[0];

    validateFile(file)

    if (isValid.value) {
      setAvatarPreview(file)
    }
    input.value = '';
  }

  const setAvatarPreview = (file: File) => {
    avatar.value = file;
    if (avatarPreview.value) URL.revokeObjectURL(avatarPreview.value);
    avatarPreview.value = URL.createObjectURL(file);
  }

  const onDeleteAvatar = () => {
    if (avatarPreview.value) {
      URL.revokeObjectURL(avatarPreview.value);
    }
    avatar.value = null;
    avatarPreview.value = null;
    errorMessage.value = '';
  };

  onUnmounted(() => {
    if (avatarPreview.value) {
      URL.revokeObjectURL(avatarPreview.value);
    }
  });
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
      background-color: rgba(255, 255, 255, 10%);
      border-radius: $border-radius-base;
      border: 1px solid rgba(255, 255, 255, 10%);
      width: 45px;
      height: 45px;
      margin-bottom: 10px;
    }

    &__area {
      background-color: rgba(255, 255, 255, 5%);
      border-radius: $border-radius-base;
      border: 2px dashed rgba(255, 255, 255, 20%);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 140px;
      margin-top: 6px;
    }

    &__avatar {
      width: 80px;
      height: 80px;
      border-radius: $border-radius-full;
      object-fit: cover;
      margin-bottom: $spacing-md;
    }

    &__delete-icon {
      cursor: pointer;
    }

    &__information {
      display: flex;
      font-size: $font-size-sm;
      align-items: center;
      gap: 8px;
      margin-top: 8px;
    }

    &__upload-error {
      color: $danger-color;
      font-weight: $font-weight-bold;
      font-size: $font-size-sm;
      text-align: center;
    }
  }
</style>
