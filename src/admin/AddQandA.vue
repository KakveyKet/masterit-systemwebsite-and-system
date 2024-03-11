<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
  >
    <div
      v-motion-slide-top
      class="w-1/2 h-auto bg-white shadow-sm rounded-lg p-5"
    >
      <div class="w-full mx-auto flex items-center justify-between mb-4">
        <h1 class="text-primery1 text-heading3">
          {{ datatoedit ? "Update FAQ" : "Add New FAQ" }}
        </h1>
        <button
          @click="handleClose"
          class="w-10 h-10 rounded-full focus:border-primery1 focus:border flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            class="w-8 h-8 text-primery1"
          >
            <path
              d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z"
            />
          </svg>
        </button>
      </div>
      <form
        @submit.prevent="handleSubmit"
        class="w-full space-y-2 items-center justify-center"
      >
        <div class="w-full gap-2">
          <div class="w-full space-y-2">
            <label class="text-body text-textbody">Answer </label>

            <input
              required
              v-model="Answer"
              type="text"
              class="input"
              placeholder="Answer"
            />
          </div>
          <div class="w-full">
            <div class="w-full space-y-2">
              <label class="text-body text-textbody"> Question </label>
              <input
                v-model="Question"
                type="text"
                class="input"
                placeholder="Question"
              />
            </div>
          </div>
        </div>

        <div class="w-auto flex justify-end mx-auto mt-2">
          <button class="btndynamic w-full bg-primery1 text-white">
            {{ datatoedit ? "Update FAQ" : "Add New" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composible/useCollection";
import { onMounted, ref } from "vue";
import { timestamp } from "@/firebase/config";

export default {
  emit: ["AddSusccesfully", "UpddateSuccess"],
  props: ["datatoedit"],
  setup(props, { emit }) {
    const { addDocs, removeDoc, updateDocs } = useCollection("FAQ");

    const Question = ref("");
    const Answer = ref("");
    const handleSubmit = async () => {
      const productData = {
        question: Question.value,
        answer: Answer.value,
        createdAt: timestamp(),
      };
      if (props.datatoedit) {
        const upadateSuccess = await updateDocs(
          props.datatoedit?.id,
          productData
        );
        if (upadateSuccess) {
          emit("UpddateSuccess");
        }
      } else {
        const success = await addDocs(productData);

        if (success) {
          emit("AddSusccesfully");
        }
      }
      handleClose();
    };

    const handleClose = () => {
      emit("close");
      Answer.value = "";
      Question.value = "";
    };
    onMounted(() => {
      if (props.datatoedit) {
        Question.value = props.datatoedit.question;
        Answer.value = props.datatoedit.answer;
      }
    });
    return {
      handleClose,
      handleSubmit,
      Question,
      Answer,
    };
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

table {
  border-collapse: collapse;
  width: 100%;
  font-size: 18px;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
@layer base {
  tr:nth-child(even) {
    @apply bg-primery1/50  text-white;
  }
}
</style>
