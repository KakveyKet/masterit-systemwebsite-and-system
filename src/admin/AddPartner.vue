<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
  >
    <div
      v-motion-slide-top
      class="w-[40%] h-auto bg-white shadow-sm rounded-lg p-5"
    >
      <div class="w-[95%] mx-auto flex items-center justify-between">
        <h1 class="text-primery1 text-heading3">
          {{ datatoedit ? "Update the partner" : "Add new partner" }}
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
        class="w-auto space-y-2 items-center justify-center"
      >
        <div class="w-full flex gap-2">
          <input
            v-model="partnername"
            type="text"
            class="input"
            placeholder="Partner Company"
          />
          <div class="input border-dashed relative">
            <h2 class="text-center text-lebeltext text-heading4">
              Company Logo
            </h2>
            <input
              type="file"
              @change="handleFileChange"
              class="opacity-0 absolute w-full"
              placeholder="company logo"
            />
          </div>
        </div>
        <textarea
          placeholder="Company Description"
          class="input w-full"
          cols="10"
          rows="5"
          v-model="partnerDetails"
        ></textarea>

        <div class="w-auto flex justify-end mx-auto">
          <button class="btndynamic w-full bg-primery1 text-white">
            {{ datatoedit ? "Update" : "Add new" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import useCollection from "@/composible/useCollection";
import useStorage from "@/composible/useStorange";
import { timestamp } from "@/firebase/config";

export default {
  props: ["datatoedit"],
  emit: ["AddSusccesfully", "UpddateSuccess"],
  setup(props, { emit }) {
    const { addDocs, removeDoc, updateDocs } = useCollection("partner");
    const { uploadImage } = useStorage();
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
    const handleClose = () => {
      emit("close");
    };
    const partnername = ref("");
    const img = ref("");
    const partnerDetails = ref("");
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
          name: partnername.value,
          description: partnerDetails.value,
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
      partnername.value = "";
      partnerDetails.value = "";
      img.value = null;
    };
    onMounted(() => {
      if (props.datatoedit) {
        partnername.value = props.datatoedit.name;
        partnerDetails.value = props.datatoedit.description;
        img.value = props.datatoedit.image;
      }
    });

    return {
      handleClose,
      partnername,
      partnerDetails,
      handleFileChange,
      handleSubmit,
    };
  },
};
</script>
