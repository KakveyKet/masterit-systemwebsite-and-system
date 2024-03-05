<template>
  <div
    class="flex flex-col items-center justify-center w-full h-full fixed top-0 right-0 bg-black/70"
  >
    <div
      v-motion-slide-top
      class="w-[998px] h-auto bg-white shadow-sm rounded-lg p-5"
    >
      <div class="w-[95%] mx-auto flex justify-between">
        <h1 class="text-primery1 text-Heading1">Add New Parner</h1>
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
      <form class="w-auto mt-5 space-y-2 items-center justify-center">
        <div class="w-auto flex justify-between mx-auto">
          <h1 class="text-heading2">Partner Company</h1>
          <input type="text" class="input" placeholder="Service Name" />
        </div>
        <div class="w-auto flex items-center justify-between mx-auto">
          <h1 class="text-heading2">Partner Logo</h1>

          <div class="w-1/2 flex items-center justify-start mr-10">
            <div
              class="w-[190px] h-[190px] border rounded-[6px] relative hover:border hover:border-primery1 duration-300 hover:rounded-md"
            >
              <img
                class="w-full h-full rounded-md"
                src="../assets/upload.png"
                alt=""
              />
              <input
                type="file"
                class="opacity-0 top-12 w-full h-full absolute"
                name=""
              />
            </div>
            <input
              type="file"
              class="opacity-0 w-16"
              placeholder="Service Name"
            />

            <br />
          </div>
        </div>

        <div class="w-auto flex justify-between mx-auto">
          <h1 class="text-heading2">Descriptions</h1>
          <textarea
            rows="2"
            type="text"
            class="input"
            placeholder="Descriptions"
          />
        </div>
        <div class="w-auto flex justify-end mx-auto">
          <button class="btndynamic bg-primery1 text-white">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: [""],
  setup(props, { emit }) {
    const handleClose = () => {
      emit("close");
    };
    return { handleClose };
  },
};
</script>
