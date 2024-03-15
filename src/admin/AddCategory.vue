<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen fixed top-0 right-0 bg-black/70 z-[20]"
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
          <div class="w-full space-y-2">
            <label class="text-body text-textbody"> Category Router </label>
            <div class="input">
              <select class="w-full bg-transparent" v-model="categoryRouter">
                <option disabled>Select a product type</option>
                <option
                  required
                  v-for="router in routerlink"
                  :value="router"
                  :key="router"
                >
                  {{ router }}
                </option>
              </select>
            </div>
          </div>
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
            {{ img }}
          </h2>
          <input
            @change="handleFileChange"
            type="file"
            class="opacity-0 absolute h-full w-full"
          />
        </div>

        <div v-if="loading == false" class="w-auto flex justify-end mx-auto">
          <button class="btndynamic w-full bg-primery1 text-white">
            {{ datatoedit ? "Update" : "Add new" }}
          </button>
        </div>
        <div v-else class="w-auto flex justify-end mx-auto">
          <button
            class="btndynamic w-full bg-primery1 flex items-center justify-center text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8 mr-2"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient
                  id="mingcuteLoadingFill0"
                  x1="50%"
                  x2="50%"
                  y1="5.271%"
                  y2="91.793%"
                >
                  <stop offset="0%" stop-color="#500192" />
                  <stop
                    offset="100%"
                    stop-color="#500192"
                    stop-opacity="0.55"
                  />
                </linearGradient>
                <linearGradient
                  id="mingcuteLoadingFill1"
                  x1="50%"
                  x2="50%"
                  y1="15.24%"
                  y2="87.15%"
                >
                  <stop offset="0%" stop-color="#500192" stop-opacity="0" />
                  <stop
                    offset="100%"
                    stop-color="#500192"
                    stop-opacity="0.55"
                  />
                </linearGradient>
              </defs>
              <g fill="none">
                <path
                  d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"
                />
                <path
                  fill="url(#mingcuteLoadingFill0)"
                  d="M8.749.021a1.5 1.5 0 0 1 .497 2.958A7.502 7.502 0 0 0 3 10.375a7.5 7.5 0 0 0 7.5 7.5v3c-5.799 0-10.5-4.7-10.5-10.5C0 5.23 3.726.865 8.749.021"
                  transform="translate(1.5 1.625)"
                />
                <path
                  fill="url(#mingcuteLoadingFill1)"
                  d="M15.392 2.673a1.5 1.5 0 0 1 2.119-.115A10.475 10.475 0 0 1 21 10.375c0 5.8-4.701 10.5-10.5 10.5v-3a7.5 7.5 0 0 0 5.007-13.084a1.5 1.5 0 0 1-.115-2.118"
                  transform="translate(1.5 1.625)"
                />
              </g>
            </svg>
            Adding
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
    const categoryRouter = ref([]);
    const routerlink = ref(["/websitedev", "/systemdev", "/bms"]);
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
    const loading = ref(false);

    const handleSubmit = async () => {
      loading.value = true;

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
          router: categoryRouter.value,
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
      categoryRouter.value = "";
      img.value = null;
    };
    onMounted(() => {
      if (props.datatoedit) {
        categoryName.value = props.datatoedit.name;
        categoryDescription.value = props.datatoedit.description;
        categoryRouter.value = props.datatoedit.router;
        img.value = props.datatoedit.image;
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
      categoryRouter,
      img,
      routerlink,
      loading,
    };
  },
};
</script>
