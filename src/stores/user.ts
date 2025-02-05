import { defineStore } from 'pinia'

interface FormState {
  name: string;
  email: string;
  githubUser: string;
  avatar: File | null;
}

export const useUserForm = defineStore('userForm', {
  state: (): FormState => ({
    name: '',
    email: '',
    githubUser: '',
    avatar: null,
  }),
  actions: {
    setFormData(formData: Partial<FormState>) {
      Object.assign(this, formData);
    },
    setAvatar(avatar: File | null) {
      console.log(avatar);
      this.avatar = avatar;
    }
  },
});
