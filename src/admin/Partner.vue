<template>
  <div class="Container bg-background h-auto font-NotoSansKhmer relative">
    <div class="w-full bg-background">
      <Navbar />
    </div>
    <div class="Container h-[72px] flex items-center ml-4">
      <h2 class="text-heading3 font-semibold">Partner</h2>
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
                placeholder="Search for company"
                class="w-full bg-transparent outline-none"
                type="text"
                name=""
                id=""
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
            <button
              class="boxbtn group bg-background flex items-center gap-2 border-2 shadow border-borderBody text-body text-primery1 font-semibold"
            >
              <font-awesome-icon
                icon="filter"
                class="w-[30px] h-[30px] text-primery1 group-hover:text-white"
              />
            </button>
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
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table
                class="w-full text-center rtl:text-right text-gray-500 dark:text-gray-400"
              >
                <thead
                  class="uppercase text-heading4 text-textbody bg-primery1/50"
                >
                  <tr>
                    <th class="px-6 py-3 border-r-2 border-borderBody">No</th>
                    <th class="px-6 py-3 border-r-2 border-borderBody">
                      Partner Company Name
                    </th>
                    <th class="px-6 py-3 border-r-2 border-borderBody">
                      Partner Logo
                    </th>

                    <th class="px-6 py-3 border-r-2 border-borderBody">
                      Partner Description
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 border-r-2 border-borderBody"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="text-start text-heading4 font-NotoSansKhmer font-semibold"
                >
                  <tr
                    class="odd:bg-white even:bg-gray-50 even:dark:bg-gray-800 text-start"
                  >
                    <th
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      1
                    </th>
                    <td
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      Master Information Technology Center
                    </td>
                    <td
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      <img
                        class="w-[120px] h-[120px] object-cover mx-auto"
                        src="../assets/image/master-it 1.png"
                        alt=""
                      />
                    </td>
                    <td
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      <p class="inline">
                        Web System Development Process entails all the tasks
                        involved in creating, updating, and managing a website
                        or a web platform.
                      </p>
                    </td>
                    <td
                      class="w-auto h-[180px] border-b-2 border-r-2 border-t-2 border-borderBody mx-auto flex items-center justify-center space-x-2 p-2"
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
                      <button
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
                    </td>
                  </tr>
                  <tr class="odd:bg-white even:dark:bg-primery1/5">
                    <th
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      2
                    </th>
                    <td
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      Master-IT Professional Skill Training
                    </td>
                    <td
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      <img
                        class="w-[120px] h-[120px] object-cover mx-auto"
                        src="../assets/image/master-it 2.png"
                        alt=""
                      />
                    </td>
                    <td
                      class="px-6 py-4 text-textbody border-2 border-borderBody"
                    >
                      A web system works in combination with a variety of web
                      development features to give users and clients with a
                      reliable and secure environment. Its major function is to
                      control and manage data flow.
                    </td>
                    <td
                      class="w-auto h-[180px] border-b-2 border-r-2 border-t-2 border-borderBody mx-auto flex items-center justify-center space-x-2 p-2"
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
                      <button
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <component :is="currentComponent" @close="handleClose" />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";
import { onMounted, ref } from "vue";
import AddPartnerVue from "./AddPartner.vue";
export default {
  components: {
    Navbar,
    AddPartnerVue,
  },
  setup() {
    const currentComponent = ref("");
    const handleClose = () => {
      currentComponent.value = "";
    };
    const isAdd = () => {
      currentComponent.value = "AddPartnerVue";
    };
    return { currentComponent, isAdd, handleClose };
  },
};
</script>

<style lang="scss" scoped></style>
./AddCategory.vue
