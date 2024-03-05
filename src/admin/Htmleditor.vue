<template>
  <div class="w-1/2">
    <form @submit.prevent="addData">
      <Editor
        v-model="value"
        editorStyle="height: 50vh; width:400px; margin:auto"
      />
      <button type="submit" class="btndynamic bg-primery1">Add</button>
    </form>

    <div>
      <h1 v-html="newData.title"></h1>
      <h2 v-html="newData.details"></h2>
      <img :src="newData.image" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Editor from "primevue/editor";
const value = ref("");
const newData = ref({
  title: "",
  details: "",
  image: "",
});

const addData = () => {
  // Add logic to process and store the data
  newData.value.title = ""; // Example: Set title to a hardcoded value
  newData.value.details = value.value; // Set details to the value from the editor
  // You may want to add more logic here, such as handling image uploads

  // Clear the editor after submitting
  value.value = "";
};
</script>
