import { ref } from 'vue';

export function useFileValidator(allowedFormats: string[], maxSizeMB: number) {
  const isValid = ref(true);
  const errorMessage = ref('');

  const validateFile = (file: File | null) => {
    if (!file) return;

    const fileSizeMB = file.size / (1024 * 1024);
    const fileExtension = file.name.split('.').pop()?.toLowerCase() || '';

    if (!allowedFormats.includes(fileExtension)) {
      isValid.value = false;
      errorMessage.value = `Invalid file format. Allowed: ${allowedFormats.join(', ')}`;
      return false;
    }

    if (fileSizeMB > maxSizeMB) {
      isValid.value = false;
      errorMessage.value = `File size exceeds ${maxSizeMB}MB.`;
      return false;
    }

    isValid.value = true;
    errorMessage.value = '';
    return true;
  };

  return { isValid, errorMessage, validateFile };
}
