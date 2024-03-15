<template>
  <div
    class="w-full flex flex-col items-center justify-center h-screen font-NotoSansKhmer"
  >
    <form
      @submit.prevent="handleSignIn"
      class="w-[700px] h-[700px] bg-background rounded-md shadow-md"
    >
      <div
        class="w-full h-[40%] flex flex-col items-center justify-center border-b-2"
      >
        <img class="w-36" src="../assets/image/image 5.png" alt="" />
        <h2 class="text-Heading1 text-primery1 font-bold">Master-IT System</h2>
      </div>
      <div class="w-[90%] mx-auto p-4 space-y-3">
        <label class="text-xl font-semibold py-2">Email</label>
        <div class="input">
          <input
            type="text"
            class="outline-none bg-transparent w-full h-full"
            placeholder="Email"
            v-model="email"
            autofocus
            required
          />
        </div>
        <label class="text-xl font-semibold py-2">Password</label>
        <div class="input relative">
          <input
            :type="showPassword ? 'text' : 'password'"
            placeholder="Password"
            class="w-full h-full bg-transparent outline-none"
            v-model="password"
            required
          />
          <svg
            v-if="showPassword == true"
            @click="togglePasswordVisibility"
            xmlns="http://www.w3.org/2000/svg"
            class="absolute right-2 h-8 w-8"
            viewBox="0 0 24 24"
          >
            <path
              fill="#500192"
              d="M11.83 9L15 12.16V12a3 3 0 0 0-3-3zm-4.3.8l1.55 1.55c-.05.21-.08.42-.08.65a3 3 0 0 0 3 3c.22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53a5 5 0 0 1-5-5c0-.79.2-1.53.53-2.2M2 4.27l2.28 2.28l.45.45C3.08 8.3 1.78 10 1 12c1.73 4.39 6 7.5 11 7.5c1.55 0 3.03-.3 4.38-.84l.43.42L19.73 22L21 20.73L3.27 3M12 7a5 5 0 0 1 5 5c0 .64-.13 1.26-.36 1.82l2.93 2.93c1.5-1.25 2.7-2.89 3.43-4.75c-1.73-4.39-6-7.5-11-7.5c-1.4 0-2.74.25-4 .7l2.17 2.15C10.74 7.13 11.35 7 12 7"
            />
          </svg>
          <svg
            v-else
            @click="togglePasswordVisibility"
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 absolute right-2"
            viewBox="0 0 24 24"
          >
            <path
              fill="#500192"
              d="M2 12c0 1.64.425 2.191 1.275 3.296C4.972 17.5 7.818 20 12 20c4.182 0 7.028-2.5 8.725-4.704C21.575 14.192 22 13.639 22 12c0-1.64-.425-2.191-1.275-3.296C19.028 6.5 16.182 4 12 4C7.818 4 4.972 6.5 3.275 8.704C2.425 9.81 2 10.361 2 12"
              opacity="0.5"
            />
            <path
              fill="#500192"
              fill-rule="evenodd"
              d="M8.25 12a3.75 3.75 0 1 1 7.5 0a3.75 3.75 0 0 1-7.5 0m1.5 0a2.25 2.25 0 1 1 4.5 0a2.25 2.25 0 0 1-4.5 0"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <button
          type="submit"
          class="input bg-primery1 text-white text-body flex items-start justify-center font-semibold hover:bg-background hover:text-primery1 hover:border-2 hover:border-primery1 duration-300"
        >
          Login
        </button>
      </div>
      <router-link class="text-center w-full" to="/register">
        <h2 class="text-lg text-primery1 underline">Don't have an account</h2>
      </router-link>
      <router-link class="text-center w-full" to="/forgetpassword">
        <h2 class="text-lg text-primery1 underline">Forget password</h2>
      </router-link>
    </form>
  </div>
</template>

<script>
import useSignIn from "../composible/SigneIn";
import { ref } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const { signin, error, isPending } = useSignIn();
    const email = ref("");
    const password = ref("");
    const handleSignIn = async () => {
      await signin(email.value, password.value);
      if (!error.value && isPending.value === false) {
        router.push({ name: "admin" });
      }
    };
    const showPassword = ref(false);
    const togglePasswordVisibility = () => {
      showPassword.value = !showPassword.value;
    };

    return {
      togglePasswordVisibility,
      password,
      showPassword,
      handleSignIn,
      email,
    };
  },
};
</script>

<style lang="scss" scoped></style>
