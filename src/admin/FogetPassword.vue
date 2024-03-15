<template>
  <div class="w-full flex flex-col items-center justify-center h-screen">
    <h1>Reset Password</h1>
    <form
      class="w-[700px] h-[700px] bg-background rounded-md shadow-md"
      @submit.prevent="handleSubmit"
    >
      <div
        class="w-full h-[40%] flex flex-col items-center justify-center border-b-2"
      >
        <img class="w-36" src="../assets/image/image 5.png" alt="" />
        <h2 class="text-Heading1 text-primery1 font-bold">Master-IT System</h2>
      </div>
      <div class="w-[90%] mx-auto p-4 space-y-3">
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
        <button
          class="input bg-primery1 text-white text-body flex items-start justify-center font-semibold hover:bg-background hover:text-primery1 hover:border-2 hover:border-primery1 duration-300"
          type="submit"
          :disabled="isPending"
        >
          Reset Password
        </button>
      </div>
      <router-link class="text-center w-full" to="/">
        <h2 class="text-lg text-primery1 underline">Back to login</h2>
      </router-link>
    </form>

    <div v-if="errorMessage">{{ errorMessage }}</div>
  </div>
</template>

<script>
import { ref } from "vue";
import useResetPassword from "@/composible/ForgetPassword";

export default {
  setup() {
    const { error, resetPassword, isPending } = useResetPassword();
    const email = ref("");
    const errorMessage = ref("");

    const handleSubmit = () => {
      errorMessage.value = null;
      resetPassword(email.value)
        .then(() => {
          alert("Reset Password email sent. Please check your inbox.");
        })
        .catch((error) => {
          console.error("Error sending reset password email:", error);
          errorMessage.value = error.message;
        });
    };

    return {
      email,
      handleSubmit,
      errorMessage,
      isPending,
    };
  },
};
</script>
