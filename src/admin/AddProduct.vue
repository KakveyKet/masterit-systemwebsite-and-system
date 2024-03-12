<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
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
                  required
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

            <div class="w-auto flex justify-end mx-auto mt-2">
              <button
                type="submit"
                v-if="ispending == false"
                class="btndynamic w-full bg-primery1 text-white"
              >
                {{ datatoedit ? "Update" : "Add new" }}
              </button>
              <button v-else class="btndynamic w-full bg-primery1 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <rect width="24" height="24" fill="none" />
                  <path
                    fill="currentColor"
                    d="M12 2A10 10 0 1 0 22 12A10 10 0 0 0 12 2Zm0 18a8 8 0 1 1 8-8A8 8 0 0 1 12 20Z"
                    opacity="0.5"
                  />
                  <path
                    fill="currentColor"
                    d="M20 12h2A10 10 0 0 0 12 2V4A8 8 0 0 1 20 12Z"
                  >
                    <animateTransform
                      attributeName="transform"
                      dur="1s"
                      from="0 12 12"
                      repeatCount="indefinite"
                      to="360 12 12"
                      type="rotate"
                    />
                  </path>
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
                <td>
                  <img
                    class="w-10 h-10"
                    :src="feature.image.src"
                    :alt="feature.image.name"
                  />
                </td>
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
          const storagePath = `feature/${img.value.name}`;
          imageURL = await uploadImage(storagePath, img.value);
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
          if (img.value.size > 1024 * 1024) {
            console.error("Image size exceeds 1MB limit.");
            return;
          }

          const storagePath = `categories/${img.value.name}`;
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
