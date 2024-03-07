<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
  >
    <div
      v-motion-slide-top
      class="w-[998px] h-[650px] bg-white shadow-sm rounded-lg p-5"
    >
      <div class="w-[95%] mx-auto flex justify-between">
        <h1 class="text-primery1 text-Heading1">Add New Service</h1>
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
          <h1 class="text-heading2">Service Name</h1>
          <input
            v-model="categoryName"
            type="text"
            class="input"
            placeholder="Service Name"
          />
        </div>
        <div class="w-[90%] flex justify-between mx-auto">
          <h1 class="text-heading2">Service Image</h1>
          <div class="flex items-end justify-center">
            <div class="flex items-end justify-between">
              <div
                class="w-[190px] h-[190px] relative hover:border hover:border-primery1 duration-300 rounded-sm hover:rounded-md"
              >
                <img
                  class="w-full h-full rounded-md"
                  src="../assets/upload.png"
                  alt=""
                />
                <input
                  type="file"
                  @change="handleFileChange"
                  class="opacity-0 top-12 w-full h-full absolute"
                  required
                />
              </div>
            </div>
            <!-- <button class="btndynamic bg-primery1 text-white">
              Upload Image
            </button> -->
          </div>
        </div>
        <div class="w-[90%] flex justify-between mx-auto">
          <h1 class="text-heading2">Descriptions</h1>
          <textarea
            rows="5"
            type="text"
            class="input"
            placeholder="Descriptions"
            v-model="categoryDescription"
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
import useStorage from "../composible/useStorange";
import { ref } from "vue";

export default {
  props: [""],
  setup(props, { emit }) {
    const { addDocs, removeDoc, updateDocs } = useCollection("categories");
    const { uploadImage } = useStorage();
    const categoryName = ref("");
    const categoryDescription = ref("");
    const img = ref(null);
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
    const handleSubmit = async () => {
      try {
        let imageURL = null;
        if (img.value) {
          if (img.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }
          const storagePath = `categories/${img.value.name}`;
          imageURL = await uploadImage(storagePath, img.value);
        }
        const productData = {
          name: categoryName.value,
          description: categoryDescription.value,
          image: imageURL,
        };
        await addDocs(productData);
        handleClose();
        console.log("Product operation successful");
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };
    const handleClose = () => {
      emit("close");
    };

    return {
      handleClose,
      handleSubmit,
      handleFileChange,
      categoryName,
      categoryDescription,
      img,
    };
  },
};
</script>
