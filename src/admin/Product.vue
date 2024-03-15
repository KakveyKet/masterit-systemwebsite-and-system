<template>
  <div class="w-[1900px] bg-background h-auto font-NotoSansKhmer relative">
    <div class="w-full">
      <Navbar />
    </div>
    <div class="Container h-[72px] flex items-center ml-4">
      <h2 class="text-heading3 font-semibold">Product and Service</h2>
    </div>
    <div
      class="Container border rounded-[6px] shadow-md bg-background h-[740px] p-3"
    >
      <div class="w-full border border-black mx-auto"></div>
      <div class="w-full mx-auto">
        <!-- product -->
        <div>
          <div class="w-full mt-4 flex items-center justify-between">
            <button
              @click="isAdd"
              class="boxbtn group bg-background flex items-center gap-2 border-2 shadow border-borderBody text-body text-primery1 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                class="w-[30px] h-[30px] text-primery1 group-hover:text-background"
              >
                <path
                  d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z"
                />
              </svg>

              Add New
            </button>
            <div class="flex gap-2">
              <div class="input_search">
                <input
                  placeholder="Search for products"
                  class="w-full bg-transparent outline-none"
                  type="text"
                  name=""
                  id=""
                  v-model="searchQuery"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-8 h-8 text-primery1"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <Menu as="div" class="relative inline-block text-left">
                <div>
                  <MenuButton
                    class="inline-flex w-full justify-center rounded-md text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                  >
                    <button
                      class="boxbtn group bg-background flex items-center gap-2 border-2 shadow border-borderBody text-body text-primery1 font-semibold"
                    >
                      <font-awesome-icon
                        icon="filter"
                        class="w-[30px] h-[30px] text-primery1 group-hover:text-white"
                      />
                    </button>
                  </MenuButton>
                </div>

                <transition
                  enter-active-class="transition duration-100 ease-out"
                  enter-from-class="transform scale-95 opacity-0"
                  enter-to-class="transform scale-100 opacity-100"
                  leave-active-class="transition duration-75 ease-in"
                  leave-from-class="transform scale-100 opacity-100"
                  leave-to-class="transform scale-95 opacity-0"
                >
                  <MenuItems
                    class="absolute z-40 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                  >
                    <div class="px-1 py-1">
                      <MenuItem v-slot="{ active }">
                        <button
                          @click="sortList('name')"
                          :class="[
                            active ? 'bg-primery1 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                          ]"
                        >
                          <EditIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                          />
                          Sort A-Z
                        </button>
                      </MenuItem>
                      <MenuItem v-slot="{ active }">
                        <button
                          @click="sortList('createdAt')"
                          :class="[
                            active ? 'bg-primery1 text-white' : 'text-gray-900',
                            'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                          ]"
                        >
                          <DuplicateIcon
                            :active="active"
                            class="mr-2 h-5 w-5 text-violet-400"
                            aria-hidden="true"
                          />
                          Date time
                        </button>
                      </MenuItem>
                    </div>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>

          <div
            class="w-full overflow-auto shadow-md h-[500px] scrollbar-hide mt-4"
          >
            <div
              v-if="currentPageItems.length > 0"
              class="relative sm:rounded-lg"
            >
              <table>
                <tr>
                  <th>No</th>
                  <th>Added Date time</th>
                  <th>Product Name</th>
                  <th>Prduct Image</th>
                  <th>Product Description</th>
                  <th class="text-center">Action</th>
                </tr>
                <tr
                  v-for="(data, index) in currentPageItems"
                  :key="index"
                  class="overflow-hidden"
                >
                  <td>{{ index + 1 }}</td>
                  <td>
                    {{
                      data && data.createdAt
                        ? new Date(
                            data.createdAt.seconds * 1000
                          ).toLocaleDateString()
                        : "N/A"
                    }}
                  </td>
                  <td>
                    <h2>
                      {{ data.name }}
                    </h2>
                  </td>
                  <td>
                    <img class="w-20 h-20 object-cover" :src="data.image" />
                  </td>
                  <td>
                    <h2>{{ data.descritpts }}</h2>
                  </td>
                  <td
                    class="flex gap-2 items-center justify-center border-none"
                  >
                    <div class="flex items-center justify-center gap-2 h-40">
                      <router-link
                        v-if="data && data.id"
                        :to="{
                          name: 'productsdetails',
                          params: { id: data.id },
                        }"
                      >
                        <button
                          class="w-[36px] flex items-center justify-center h-[36px] bg-primery1 rounded-[6px]"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            class="w-6 h-6 text-white"
                          >
                            <path
                              d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
                            />
                            <path
                              fill-rule="evenodd"
                              d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </button>
                      </router-link>

                      <button
                        @click="handleAddEditData(data)"
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
                        @click="handleDelete(data.id)"
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
                  <div
                    v-if="isDeleteOpen == true"
                    class="fixed w-full h-full bg-black/50 flex items-center top-0 right-0 justify-center"
                  >
                    <div
                      v-motion-slide-top
                      class="w-[400px] bg-background p-3 rounded-[6px]"
                    >
                      <h2 class="text-body text-primery1 text-xl">
                        Are you soure to delete this product ?
                      </h2>
                      <div class="flex items-center py-4 gap-2">
                        <button
                          class="btndynamic text-white bg-accent"
                          @click="closeDelete"
                        >
                          Cancel
                        </button>
                        <button
                          class="btndynamic text-primery1 border-primery1 border hover:bg-primery1 hover:text-white"
                          @click="deleteProduct"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </tr>
              </table>
            </div>

            <div
              v-else
              class="relative sm:rounded-lg flex items-center justify-center h-[400px]"
            >
              <h2 class="text-heading3 text-primery1">No item found</h2>
            </div>
          </div>
          <div class="w-full flex items-center justify-end mt-8 gap-4">
            <button
              :class="{ 'bg-primery1/50': currentPage === 1 }"
              v-if="currentPage > 1"
              class="w-10 h-10 bg-primery1 rounded-md text-white flex items-center justify-center hover:bg-background hover:border-2 duration-200 hover:text-primery1 hover:border-primery1"
              @click="prevPage"
              :disabled="currentPage === 1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            {{ currentPage }} of {{ totalPages }}
            <button
              :class="{ 'bg-primery1/50': currentPage === totalPages }"
              class="w-10 h-10 bg-primery1 rounded-md text-white flex items-center justify-center hover:bg-background hover:border-2 duration-200 hover:text-primery1 hover:border-primery1"
              @click="nextPage"
              :disabled="currentPage === totalPages"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <component
      :is="currentComponent"
      @close="handleClose"
      @AddSusccesfully="handleSubmit"
      @UpddateSuccess="handleUpdateSuccess"
      :datatoedit="datatoedit"
    />
  </div>
  <FooterVue />
</template>

<script>
import Navbar from "./Navbar.vue";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";

import { onMounted, ref, computed } from "vue";
import AddProductVue from "./AddProduct.vue";
import { push, Notivue, Notification } from "notivue";
import useCollection from "@/composible/useCollection";
import { getCollectionQuery } from "@/composible/getCollection";
import FooterVue from "./Footer.vue";
export default {
  components: {
    Navbar,
    AddProductVue,
    Notivue,
    Notification,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    FooterVue,
  },
  setup() {
    const { addDocs, removeDoc, updateDocs } = useCollection("products");

    const dataitem = ref([]);
    let sortedbyASC = ref(true);

    const sortList = (sortBy) => {
      if (sortedbyASC.value) {
        dataitem.value.sort((x, y) => (x[sortBy] > y[sortBy] ? -1 : 1));
        sortedbyASC.value = false;
      } else {
        dataitem.value.sort((x, y) => (x[sortBy] < y[sortBy] ? -1 : 1));
        sortedbyASC.value = true;
      }
    };

    const getData = async () => {
      try {
        const data = await getCollectionQuery(
          "products",
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

    const itemsPerPage = 5;
    const currentPage = ref(1);
    const totalPages = computed(() => {
      return Math.ceil(filteredItems.value.length / itemsPerPage);
    });

    const currentPageItems = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return filteredItems.value.slice(startIndex, endIndex);
    });

    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value -= 1;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value += 1;
      }
    };
    const searchQuery = ref("");

    const filteredItems = computed(() => {
      const query = searchQuery.value.toLowerCase();
      return dataitem.value.filter((item) => {
        if (item && item.name) {
          return item.name.toLowerCase().includes(query);
        }
        return false;
      });
    });

    // dynamically component
    const currentComponent = ref("");
    const handleClose = () => {
      currentComponent.value = "";
    };
    const handleSuccess = (message) => {
      push.success(message);
    };
    const handleSubmit = () => {
      handleSuccess("Added successfully");
    };

    const handleUpdateSuccess = () => {
      handleSuccess("Updated successfully");
    };

    const datatoedit = ref(null);
    const handleAddEditData = (item) => {
      currentComponent.value = "AddProductVue";
      datatoedit.value = item;
      console.log("====================================");
      console.log(datatoedit.value);
      console.log("====================================");
    };

    const isAdd = () => {
      currentComponent.value = "AddProductVue";
      datatoedit.value = null; // Reset datatoedit when adding a new product
    };
    const productId = ref(null);
    const closeDelete = () => {
      isDeleteOpen.value = !isDeleteOpen.value;
    };
    const isDeleteOpen = ref(false);
    const handleDelete = (id) => {
      productId.value = id;
      isDeleteOpen.value = !isDeleteOpen.value;
    };
    const deleteProduct = async () => {
      isDeleteOpen.value = false;

      try {
        if (!productId.value) {
          console.error("Product ID is required.");
          return;
        }
        await removeDoc(productId.value);
        push.warning("Deleted Successfully");

        console.log(productId.value);
        productId.value = "";
        console.log("Product deleted successfully");
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    };
    return {
      currentComponent,
      isAdd,
      handleClose,
      dataitem,
      handleSubmit,
      handleAddEditData,
      datatoedit,
      handleUpdateSuccess,
      handleDelete,
      isDeleteOpen,
      deleteProduct,
      closeDelete,
      sortList,
      currentPageItems,
      currentPage,
      totalPages,
      prevPage,
      nextPage,
      filteredItems,
      searchQuery,
    };
  },
};
</script>
<style>
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>
