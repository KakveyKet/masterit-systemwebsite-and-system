<template>
  <div class="w-ful z-[90] h-[110px] shadow-md flex font-NotoSansKhmer">
    <div class="items-center justify-between w-[98%] flex mx-auto">
      <div class="flex items-center space-x-4">
        <div>
          <img src="../assets/image/image 5.png" alt="" />
        </div>
        <div class="">
          <h1 class="text-primery1 text-Heading1">Master IT System</h1>
        </div>
      </div>

      <div class="flex items-center space-x-4">
        <div class="flex gap-3">
          <router-link
            to="/admin"
            class="text-body text-primery1 font-semibold px-[25px] py-[12px] hover:bg-primery2/50 duration-300"
          >
            Dashborad
          </router-link>
          <router-link
            to="/services"
            class="text-body text-primery1 font-semibold px-[25px] py-[12px] hover:bg-primery2/50 duration-300"
          >
            Category
          </router-link>
          <router-link
            class="text-body text-primery1 font-semibold px-[25px] py-[12px] hover:bg-primery2/50 duration-300"
            to="/products"
          >
            Products
          </router-link>
          <router-link
            class="text-body text-primery1 font-semibold px-[25px] py-[12px] hover:bg-primery2/50 duration-300"
            to="/qanda"
          >
            FAQ
          </router-link>
          <router-link
            class="text-body text-primery1 font-semibold px-[25px] py-[12px] hover:bg-primery2/50 duration-300"
            to="/partner"
          >
            Partner
          </router-link>
        </div>
        <div class="">
          <p class="text-heading4 font-semibold text-primery1 overflow-hidden">
            Admin
          </p>
        </div>
        <div class="w-20 h-20 rounded-full border p-2">
          <img class="object-cover" src="../assets/image/image 5.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
