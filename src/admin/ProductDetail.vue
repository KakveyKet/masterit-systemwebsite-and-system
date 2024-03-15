<template>
  <div
    class="w-full h-screen flex flex-col items-center justify-center font-NotoSansKhmer relative"
    v-if="product"
  >
    <router-link to="/products" class="w-auto fixed top-2 left-2 py-4">
      <button
        class="btndynamic bg-primery2 text-white hover:text-primery1 duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M17 10a.75.75 0 0 1-.75.75H5.612l4.158 3.96a.75.75 0 1 1-1.04 1.08l-5.5-5.25a.75.75 0 0 1 0-1.08l5.5-5.25a.75.75 0 1 1 1.04 1.08L5.612 9.25H16.25A.75.75 0 0 1 17 10Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </router-link>
    <div
      class="w-[70%] h-auto bg-background rounded-[6px] shadow-md p-5 space-y-4 rela"
    >
      <div class="flex items-center w-full">
        <div class="w-1/2">
          <h2 class="text-heading2 text-primery1 font-semibold">
            Product Title:
          </h2>
        </div>

        <div class="w-1/2 flex items-center justify-start">
          <h2 class="text-body text-textbody">{{ product.name }}</h2>
        </div>
      </div>

      <div class="flex items-center w-full">
        <div class="w-1/2">
          <h2 class="text-heading2 text-primery1 font-semibold">
            Product Image:
          </h2>
        </div>

        <div class="w-1/2 flex items-center justify-start">
          <img
            :src="product.image"
            class="w-[220px] h-[220px] rounded-md object-cover"
            alt=""
          />
        </div>
      </div>
      <div class="flex items-center w-full">
        <div class="w-1/2">
          <h2 class="text-heading2 text-primery1 font-semibold">
            Product Description:
          </h2>
        </div>

        <div class="w-1/2 flex items-center justify-start">
          <h2 class="text-body text-textbody">{{ product.descritpts }}</h2>
        </div>
      </div>
      <div class="w-full border-t-2">
        <h2 class="text-primery1 text-heading4">Product Features:</h2>
      </div>
      <div class="grid grid-cols-2">
        <div v-for="features in product.feature" :key="features" class="w-full">
          <div class="w-full flex">
            <div class="w-1/2">
              <h2 class="text-body text-textbody font-semibold">title:</h2>
            </div>
            <div class="w-1/2">
              <h2 class="text-body text-textbody">
                {{ features.title }}
              </h2>
            </div>
          </div>
          <div class="w-full flex">
            <div class="w-1/2">
              <h2 class="text-body text-textbody font-semibold">details:</h2>
            </div>
            <div class="w-1/2">
              <h2 class="text-body text-textbody">
                {{ features.details }}
              </h2>
            </div>
          </div>
          <div class="w-full flex">
            <div class="w-1/2">
              <h2 class="text-body text-textbody font-semibold">Image:</h2>
            </div>
            <div class="w-1/2">
              <img
                class="w-[200px] h-[200px] object-cover rounded-md"
                :src="features.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { projectFirestore } from "@/firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default {
  props: {
    id: String, // Accept product ID as a prop
  },
  setup(props) {
    const product = ref(null);

    const fetchProduct = async () => {
      try {
        const productRef = doc(projectFirestore, "products", props.id);
        const docSnap = await getDoc(productRef);
        if (docSnap.exists()) {
          product.value = docSnap.data();
        } else {
          console.error(`Product with ID ${props.id} not found.`);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    onMounted(() => {
      fetchProduct();
    });

    // Cleanup logic if needed

    return { product };
  },
};
</script>
