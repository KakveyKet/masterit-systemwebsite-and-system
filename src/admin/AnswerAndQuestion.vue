<template>
  <div class="w-full bg-background h-auto font-NotoSansKhmer relative">
    <Navbar />
    <div class="Container h-[72px] flex items-center ml-4">
      <h2 class="text-heading3 font-semibold">FAQ</h2>
    </div>
    <div
      class="Container border rounded-[6px] shadow-md bg-background h-[740px] p-3"
    >
      <div class="w-full p-3 flex items-center justify-between">
        <router-link to="/admin" class="flex items-center gap-4">
          <button
            class="boxbtn group bg-background flex items-center gap-2 border-2 shadow border-borderBody text-body text-primery1 font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              class="w-[30px] h-[30px] text-primery1 group-hover:text-background"
            >
              <path
                fill-rule="evenodd"
                d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25h8.69A.75.75 0 0 1 14 8Z"
                clip-rule="evenodd"
              />
            </svg>

            Go Back
          </button>
        </router-link>
        <div class="flex items-center gap-2">
          <div class="flex gap-2">
            <div class="input_search">
              <input
                placeholder="Search for Q&A"
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
          </div>
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
                      Sort by A-Z
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
      <div class="w-full border border-black mx-auto"></div>
      <div class="w-full mx-auto">
        <!-- partner -->
        <div
          class="hidden opacity-100 w-full transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-home"
          role="tabpanel"
          aria-labelledby="tabs-home-tab"
          data-te-tab-active
        >
          <div class="w-full mt-4">
            <div
              v-if="currentPageItems.length > 0"
              class="relative sm:rounded-lg shadow-md"
            >
              <table>
                <tr>
                  <th class="text-center">No</th>
                  <th>Date time</th>
                  <th>Answer</th>
                  <th>Question</th>
                  <th class="text-center">Action</th>
                </tr>
                <tr
                  v-for="(data, index) in currentPageItems"
                  :key="index"
                  class="overflow-hidden"
                >
                  <td class="text-center">
                    {{ index + 1 }}
                  </td>
                  <td>
                    {{
                      data && data.createdAt
                        ? new Date(
                            data.createdAt.seconds * 1000
                          ).toLocaleString()
                        : "N/A"
                    }}
                  </td>

                  <td>{{ data.answer }}</td>
                  <td>{{ data.question }}</td>
                  <td
                    class="flex gap-2 items-center justify-center border-none"
                  >
                    <div
                      class="flex w-full h-20 gap-3 items-center justify-center"
                    >
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
                    class="fixed w-full h-screen bg-black/20 flex items-center top-0 right-0 justify-center"
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
                          @click="deleteProduct"
                          class="btndynamic text-primery1 border-primery1 border hover:bg-primery1 hover:text-white"
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
    </div>
    <Notivue v-slot="item">
      <Notification :item="item" />
    </Notivue>
    <component
      :is="currentComponent"
      @close="handleClose"
      :datatoedit="datatoedit"
      @AddSusccesfully="handleSubmit"
      @UpddateSuccess="handleUpdateSuccess"
    />
  </div>
  <div>
    <Footer />
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import Footer from "./Footer.vue";
import Navbar from "./Navbar.vue";
import { onMounted, ref, computed } from "vue";
import AddQandAVue from "./AddQandA.vue";
import { push, Notivue, Notification } from "notivue";
import useCollection from "@/composible/useCollection";
import { getCollectionQuery } from "@/composible/getCollection";
export default {
  components: {
    Navbar,
    AddQandAVue,
    Notivue,
    Notification,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    Footer,
  },
  setup() {
    const { addDocs, removeDoc, updateDocs } = useCollection("FAQ");
    const getData = async () => {
      try {
        const data = await getCollectionQuery(
          "FAQ",
          [],
          (data) => {
            dataitem.value = data; // Assign data to sortedData
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
        if ((item && item.answer) || item.question) {
          return (
            item.answer.toLowerCase().includes(query) ||
            item.question.toLowerCase().includes(query)
          );
        }
        return false;
      });
    });
    // dynamic component
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
      currentComponent.value = "AddQandAVue";
      datatoedit.value = item;
      console.log("====================================");
      console.log(datatoedit.value);
      console.log("====================================");
    };
    const dataitem = ref([]);
    const currentComponent = ref("");
    const handleClose = () => {
      currentComponent.value = "";
    };
    const isAdd = () => {
      currentComponent.value = "AddQandAVue";
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
      closeDelete();
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
      handleAddEditData,
      datatoedit,
      handleSubmit,
      handleUpdateSuccess,
      deleteProduct,
      handleDelete,
      isDeleteOpen,
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
