<template>
  <div class="w-1/2">
    <form @submit.prevent="handleSubmit">
      <Editor
        v-model="value"
        editorStyle="height: 50vh; width:950px; margin:auto"
      />
      <button type="submit" class="btndynamic bg-primery1">add</button>
    </form>
    <div v-for="data in dataitem" :key="data">
      <div v-html="data.feature" class="text-lg"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Editor from "primevue/editor";
import useCollection from "@/composible/useCollection";
import { getCollectionQuery } from "@/composible/getCollection";
import useStorage from "@/composible/useStorange";
const { addDocs, removeDoc, updateDocs } = useCollection("test");
const img = ref(null);
const dataitem = ref([]);
const getData = async () => {
  try {
    await getCollectionQuery(
      "test",
      [],
      (data) => {
        dataitem.value = data;
      },
      true
    );
  } catch (error) {
    console.error(error.message);
  }
};
onMounted(() => {
  getData();
});
const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (!file) {
    console.error("No file selected.");
    return;
  }

  const allowedExtensions = ["jpg", "png", "svg", "jpeg"];
  const extension = file.name.split(".").pop().toLowerCase();

  if (!allowedExtensions.includes(extension)) {
    console.error("Only jpg, png, svg, and jpeg files are allowed.");
    return;
  }
  img.value = file;
};
const value = ref("");

const handleSubmit = async () => {
  const newFeature = {
    feature: value.value,
  };
  await addDocs(newFeature);

  value.value = "";
};
</script>
