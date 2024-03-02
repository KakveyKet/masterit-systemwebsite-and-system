<template>
  <div class="flex flex-col">
    <div><NavbarVue /></div>
    <div class="w-full md:w-full xl:w-[1420px] lg:w-[1420px] mx-auto space-y-4">
      <div
        class="lg:mt-52 xl:mt-52 md:mt-32 mt-20 text-start lg:p-0 xl:p-0 p-3 md:p-3"
      >
        <h1 class="font-NotoSansKhmer text-primery1">
          អភិវឌ្ឍន៍ប្រព័ន្ធ (System Development)
        </h1>
      </div>

      <div class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3">
        <p class="text-textbody font-semibold text-body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
          arcu bibendum at varius vel pharetra. Sit amet consectetur adipiscing
          elit. Odio euismod lacinia at quis.
        </p>
      </div>
      <div
        class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3 mx-auto border-b-gray-400 lg:h-[522px] xl:h-[522px] md:h-auto h-auto lg:flex lg:flex-row xl:flex xl:flex-row md:flex md:flex-col-reverse flex flex-col-reverse items-center justify-between"
      >
        <div class="">
          <ul
            class="lg:text-heading4 xl:text-heading4 md:text-heading3 text-body font-NotoSansKhmer font-semibold"
          >
            <li class="">១. ការរៀបចំផែនការ (ប្រមូលទិន្នន័យ)</li>
            <li>២. ការវិភាគ (វិភាគទៅលើទំហំការងារ រយៈពេល)</li>
            <li>
              ៣. ការរចនា (រចនាលំនាំកម្មវិធី ដែលអាចដឹងថាកម្មវិធីនោះមានរូបរាង
              និងដំណើរការបែបណា)
            </li>
            <li>៤. ការសរសេរកូដ (បម្លែងដំណាក់កាលទីបីទៅជាផ្លូវការ)</li>
            <li>៥. សាកល្បងប្រើប្រាស់ ដើម្បីស្វែងរកកំហុសឆ្គង និងកែលម្អ</li>
            <li>៦ . ការថែទាំទៅលើប្រព័ន្ធ</li>
          </ul>
        </div>
        <div class="lg:py-0 xl:py-0 md:py-2 py-2">
          <img
            src="../assets/system/cover.png"
            class="xl:w-[503px] xl:h-[552px] lg:w-[503px] lg:h-[503px] md:w-full md:h-full w-full h-full"
            alt=""
          />
        </div>
      </div>
      <div class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3 p">
        <div
          class="w-full lg:columns-3 xl:columns-3 md:columns-2 columns-1 space-y-4 py-4"
        >
          <div class="group relative w-full">
            <router-link
              to="/systemdev/:id"
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </router-link>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/1.png" />
            </div>
          </div>

          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/2.jpg" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/3.png" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/4.png" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/5.png" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/6.png" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/7.jpg" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img class="w-full rounded-md" src="../assets/system/8.jpg" />
            </div>
          </div>
          <div class="group relative w-full">
            <div
              class="absolute h-full w-full overflow-hidden rounded-md group-hover:bg-opacity-55"
            >
              <div
                class="absolute top-0 h-10 w-10 overflow-auto bg-opacity-0 duration-300 group-hover:h-full group-hover:w-full group-hover:bg-black/50"
              ></div>

              <div class="flex justify-center items-end w-full h-[80%]">
                <div
                  class="text-center text-2xl font-semibold text-white overflow-hidden opacity-0 group-hover:opacity-100"
                >
                  <p
                    class="translate-y-10 group-hover:translate-y-0 duration-300"
                  >
                    product 1
                  </p>
                </div>
              </div>
              <div
                class="flex items-end justify-center group-hover:h-[100px] opacity-0 group-hover:opacity-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-12 w-12 cursor-pointer text-white opacity-0 delay-500 duration-300 group-hover:translate-y-[-50px] group-hover:opacity-100"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
            <div class="w-full h-full">
              <img
                class="w-full rounded-md"
                src="https://i.pinimg.com/236x/69/36/a1/6936a14841e47a058c446cd32ceab32f.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div><FooterVue /></div>
  </div>
</template>

<script>
import FooterVue from "./Footer.vue";
import NavbarVue from "./Navbar.vue";
export default {
  components: {
    FooterVue,
    NavbarVue,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
