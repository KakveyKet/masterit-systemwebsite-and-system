<template>
  <div
    class="flex flex-col items-center justify-center w-full h-screen fixed top-0 right-0 bg-black/70 z-[20]"
  >
    <div
      v-motion-slide-top
      class="w-[70%] h-auto bg-white shadow-sm rounded-lg p-2"
    >
      <div
        v-motion-slide-top
        class="w-full h-auto bg-white shadow-sm rounded-lg p-5"
      >
        <div class="w-full mx-auto flex items-center justify-between mb-4">
          <h1 class="text-primery1 text-heading3">
            {{ datatoedit ? "Update product" : "Add new product" }}
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
        <div class="flex justify-between gap-4">
          <form
            @submit.prevent="handleSubmit"
            class="w-1/2 space-y-2 items-center justify-center"
          >
            <div class="w-full flex gap-2">
              <div class="w-full space-y-2">
                <label class="text-body text-textbody"> Product Name </label>

                <input
                  required
                  v-model="productName"
                  type="text"
                  class="input"
                  placeholder="Product Name"
                />
              </div>
              <div class="w-full">
                <div class="w-full space-y-2">
                  <label class="text-body text-textbody">
                    Product Display
                  </label>
                  <div class="input">
                    <select
                      required
                      class="w-full bg-transparent"
                      v-model="productDisplay"
                    >
                      <option disabled value="">
                        Select a product deispay
                      </option>

                      <option
                        required
                        v-for="productItem in productDisplayStanding"
                        :value="productItem"
                        :key="productItem"
                      >
                        {{ productItem }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div
                class="input border-2 w-full border-primery1 border-dashed relative overflow-hidden"
              >
                <h2
                  v-if="!productImage"
                  class="text-center text-lebeltext text-heading4 overflow-auto"
                >
                  Product image
                </h2>
                <h2
                  v-else
                  class="text-center text-lebeltext text-heading4 w-full h-full overflow-auto text-nowrap"
                >
                  {{ productImage.name }}
                </h2>
                <input
                  @change="handleFileChangeProductImage"
                  type="file"
                  class="opacity-0 absolute w-full"
                />
              </div>
            </div>
            <div class="w-full bg-primery1/10 p-2 rounded-[6px] space-y-2">
              <form @submit.prevent="handleAddFeature" class="space-y-2">
                <div class="flex w-full gap-2">
                  <input
                    required
                    v-model="productFeaturesTitle"
                    type="text"
                    class="input"
                    placeholder="Product Feature"
                  />
                  <div
                    class="input border-2 border-primery1 border-dashed relative overflow-hidden"
                  >
                    <h2
                      v-if="!img"
                      class="text-center text-lebeltext text-heading4 overflow-auto"
                    >
                      Feature image
                    </h2>
                    <h2
                      v-else
                      class="text-center text-lebeltext text-heading4 w-full h-full overflow-auto text-nowrap"
                    >
                      {{ img.name }}
                    </h2>
                    <input
                      required
                      @change="handleFileChange"
                      type="file"
                      class="opacity-0 absolute w-full"
                    />
                  </div>
                </div>
                <textarea
                  rows="5"
                  cols="50"
                  required
                  v-model="productFeatueDetails"
                  class="input"
                  placeholder="Product Content"
                />

                <div class="w-auto flex justify-end mx-auto">
                  <button class="btndynamic w-full bg-primery1 text-white">
                    {{ datatoedit ? "Update" : "Post" }}
                  </button>
                </div>
              </form>
            </div>

            <div class="input">
              <select class="w-full bg-transparent" v-model="itemsType">
                <option disabled value="">Select a product type</option>
                <option
                  required
                  v-for="producttype in productType"
                  :value="producttype"
                  :key="producttype"
                >
                  {{ producttype }}
                </option>
              </select>
            </div>
            <textarea
              required
              v-model="productDesscript"
              placeholder="Product Description"
              class="input w-full mt-2"
              cols="10"
              rows="2"
            ></textarea>

            <div
              v-if="loading == false"
              class="w-auto flex justify-end mx-auto"
            >
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
          <div class="relative w-1/2 overflow-x-auto shadow-md sm:rounded-lg">
            <table v-if="productFeatures.length > 0">
              <tr>
                <td>Feature</td>
                <td>Content</td>
                <td>Image</td>
                <th class="text-center">Action</th>
              </tr>
              <tr v-for="(feature, index) in productFeatures" :key="index">
                <td>{{ feature.title }}</td>
                <td>{{ feature.details }}</td>
                <td><img class="w-10 h-10" :src="feature.image" /></td>
                <td>
                  <div
                    class="flex w-full h-full gap-3 items-center justify-center"
                  >
                    <button
                      @click="editFeature(feature)"
                      class="w-[36px] flex items-center justify-center h-[36px] bg-accent rounded-[6px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-6 h-6 text-white"
                      >
                        <path
                          d="m5.433 13.917 1.262-3.155A4 4 0 0 1 7.58 9.42l6.92-6.918a2.121 2.121 0 0 1 3 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 0 1-.65-.65Z"
                        />
                        <path
                          d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0 0 10 3H4.75A2.75 2.75 0 0 0 2 5.75v9.5A2.75 2.75 0 0 0 4.75 18h9.5A2.75 2.75 0 0 0 17 15.25V10a.75.75 0 0 0-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5Z"
                        />
                      </svg>
                    </button>
                    <button
                      @click="handleRemoveFeature(index)"
                      class="w-[36px] flex items-center justify-center h-[36px] bg-red-500 rounded-[6px]"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        class="w-6 h-6 text-white"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.75 1A2.75 2.75 0 0 0 6 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 1 0 .23 1.482l.149-.022.841 10.518A2.75 2.75 0 0 0 7.596 19h4.807a2.75 2.75 0 0 0 2.742-2.53l.841-10.52.149.023a.75.75 0 0 0 .23-1.482A41.03 41.03 0 0 0 14 4.193V3.75A2.75 2.75 0 0 0 11.25 1h-2.5ZM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4ZM8.58 7.72a.75.75 0 0 0-1.5.06l.3 7.5a.75.75 0 1 0 1.5-.06l-.3-7.5Zm4.34.06a.75.75 0 1 0-1.5-.06l-.3 7.5a.75.75 0 1 0 1.5.06l.3-7.5Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            </table>
            <div
              v-else
              class="relative w-[600px] flex items-center justify-center text-primery1 font-NotoSansKhmer text-body h-full overflow-x-auto sm:rounded-lg"
            >
              <h2>No Feature Added</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useCollection from "@/composible/useCollection";
import useStorage from "@/composible/useStorange";
import { push } from "notivue";
import { ref, onMounted } from "vue";
import { timestamp } from "@/firebase/config";

export default {
  emit: ["AddSusccesfully", "UpddateSuccess"],
  props: ["datatoedit"],
  setup(props, { emit }) {
    const ispending = ref(false);
    const { addDocs, removeDoc, updateDocs } = useCollection("products");
    const { uploadImage } = useStorage();
    const productName = ref("");
    const productDesscript = ref("");
    const productImage = ref(null);

    const productFeatures = ref([]);
    const productFeaturesTitle = ref("");
    const productFeatueDetails = ref("");
    const img = ref(null);

    const productDisplay = ref("");
    const productDisplayStanding = ref(["outstanding", "normal"]);
    const productType = ref(["Webiste Desige", "System Development", "BMS"]);
    const itemsType = ref("");

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

    const handleFileChangeProductImage = (event) => {
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
      productImage.value = file;
    };
    const loading = ref(false);
    const handleSubmit = async () => {
      loading.value = true;
      try {
        let imageURL = null;

        if (
          productImage.value &&
          productImage.value !== props.datatoedit?.image
        ) {
          // Check image size
          if (productImage.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }

          // Upload image
          const storagePath = `product/${productImage.value.name}`;
          imageURL = await uploadImage(storagePath, productImage.value);
        } else {
          // If img.value hasn't changed or is not provided, retain the existing image URL
          imageURL = props.datatoedit?.image;
        }
        const productData = {
          name: productName.value,
          feature: productFeatures.value,
          type: itemsType.value,
          descritpts: productDesscript.value,
          productdisplay: productDisplay.value,
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
          ispending.value = true;
          if (success) {
            emit("AddSusccesfully");
          }
        }
        handleClose();
        console.log("Product operation successful");
      } catch (error) {
        console.error("Error performing product operation:", error);
      }
    };

    const handleAddFeature = async () => {
      try {
        let imageURL = null;

        if (img.value && img.value !== props.datatoedit?.image) {
          // Check image size
          if (img.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }

          // Upload image
          const storagePath = `feature/${img.value.name}`;
          imageURL = await uploadImage(storagePath, img.value);
        } else {
          // If img.value hasn't changed or is not provided, retain the existing image URL
          imageURL = props.datatoedit?.image;
        }
        const newFeature = {
          title: productFeaturesTitle.value,
          details: productFeatueDetails.value,
          image: imageURL,
        };
        productFeatures.value.push(newFeature);
        productFeaturesTitle.value = "";
        productFeatueDetails.value = "";
        img.value = "";
        console.log(newFeature);
      } catch (error) {
        console.error("Error adding feature:", error);
      }
    };

    onMounted(() => {
      if (props.datatoedit) {
        productName.value = props.datatoedit.name;
        productFeatures.value = props.datatoedit.feature;
        itemsType.value = props.datatoedit.type;
        productDesscript.value = props.datatoedit.descritpts;
        productDisplay.value = props.datatoedit.productdisplay;
        productImage.value = props.datatoedit.image;
      }
    });
    const currentComponent = ref("");
    const handleClose = () => {
      currentComponent.value = "";
      emit("close");
    };

    const handleRemoveFeature = (index) => {
      productFeatures.value.splice(index, 1);
    };

    const editFeature = (item) => {
      productFeaturesTitle.value = item.title;
      productFeatueDetails.value = item.details;
      img.value = item.image;
      productFeatures.value.splice(item, 1);
    };

    return {
      handleClose,
      handleAddFeature,
      handleFileChange,
      productFeatueDetails,
      productFeaturesTitle,
      productFeatures,
      productDisplay,
      productName,
      productType,
      img,
      itemsType,
      handleSubmit,
      currentComponent,
      productDisplayStanding,
      handleRemoveFeature,
      editFeature,
      push,
      productDesscript,
      ispending,
      handleFileChangeProductImage,
      productImage,
      loading,
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
