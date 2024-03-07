<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
  >
    <div
      v-motion-slide-top
      class="w-[998px] h-[650px] bg-white shadow-sm rounded-lg p-5"
    >
      <div class="w-[95%] mx-auto flex justify-between">
        <h1 class="text-primery1 text-Heading1">Add New FAQ</h1>
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
      <form @submit.prevent="handleSubmit" class="w-full mt-5 space-y-4">
        <div class="w-[90%] flex justify-between mx-auto">
          <h1 class="text-heading2">Question</h1>
          <input
            v-model="Question"
            type="text"
            class="input"
            placeholder="Question"
          />
        </div>

        <div class="w-[90%] flex justify-between mx-auto">
          <h1 class="text-heading2">Answer</h1>
          <textarea
            rows="5"
            type="text"
            class="input"
            placeholder="Answer"
            v-model="Answer"
          />
        </div>
        <div class="w-[90%] flex justify-end mx-auto">
          <button class="btndynamic bg-primery1 text-white">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composible/useCollection";
import { getCollectionQuery } from "@/composible/getCollection";
import { onMounted, ref } from "vue";
export default {
  props: [""],
  setup(props, { emit }) {
    const { addDocs, removeDoc, updateDocs } = useCollection("FAQ");

    const Question = ref("");
    const Answer = ref("");
    const handleSubmit = async () => {
      const newQuestion = {
        question: Question.value,
        answer: Answer.value,
      };
      await addDocs(newQuestion);
      handleClose();
    };
    const handleClose = () => {
      emit("close");
      Answer.value = "";
      Question.value = "";
    };
    return { handleClose, handleSubmit, Question, Answer };
  },
};
</script>
