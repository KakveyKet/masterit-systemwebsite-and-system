<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
  >
    <div
      v-motion-slide-top
      class="w-[998px] h-auto bg-white shadow-sm rounded-lg p-5"
    >
      <div class="w-full mx-auto flex items-center justify-between mb-4">
        <h1 class="text-primery1 text-heading3">
          {{ datatoedit ? "Update Category" : "Add new Category" }}
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
        <div class="w-full flex gap-2">
          <div class="w-full space-y-2">
            <label class="text-body text-textbody"> Category Name </label>

            <input
              required
              v-model="categoryName"
              type="text"
              class="input"
              placeholder="Category Name"
            />
          </div>
          <div class="w-full">
            <div class="w-full space-y-2">
              <label class="text-body text-textbody">
                Category Description
              </label>
              <input
                v-model="categoryDescription"
                type="text"
                class="input"
                placeholder="Category Description"
              />
            </div>
          </div>
        </div>

        <div
          class="input h-[200px] border-2 border-primery1 border-dashed flex items-center justify-center relative overflow-hidden"
        >
          <h2
            v-if="!img"
            class="text-center text-lebeltext text-heading4 overflow-auto"
          >
            Category image
          </h2>
          <h2
            v-else
            class="text-center text-lebeltext text-heading4 w-full h-full overflow-auto text-nowrap"
          >
            {{ img.name }}
          </h2>
          <input
            @change="handleFileChange"
            type="file"
            class="opacity-0 absolute h-full w-full"
          />
        </div>

        <div class="w-auto flex justify-end mx-auto mt-2">
          <button class="btndynamic w-full bg-primery1 text-white">
            {{ datatoedit ? "Update" : "Add New" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composible/useCollection";
import useStorage from "../composible/useStorange";
import { ref, onMounted } from "vue";
import { timestamp } from "@/firebase/config";
export default {
  emit: ["AddSusccesfully", "UpddateSuccess"],
  props: ["datatoedit"],
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

        if (img.value && img.value !== props.datatoedit?.image) {
          // Check image size
          if (img.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }

          // Upload image
          const storagePath = `categories/${img.value.name}`;
          imageURL = await uploadImage(storagePath, img.value);
        } else {
          // If img.value hasn't changed or is not provided, retain the existing image URL
          imageURL = props.datatoedit?.image;
        }
        const productData = {
          name: categoryName.value,
          description: categoryDescription.value,
          image: imageURL,
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

        console.log("Product operation successful");
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
      handleClear();
      handleClose();
    };

    const handleClear = () => {
      categoryName.value = "";
      categoryDescription.value = "";
      img.value = null;
    };
    onMounted(() => {
      if (props.datatoedit) {
        categoryName.value = props.datatoedit.name;
        categoryDescription.value = props.datatoedit.description;
        img.value = props.datatoedit.imageURL;
      }
    });
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
