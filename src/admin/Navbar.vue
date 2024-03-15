<template>
  <div class="w-full z-[90] h-[110px] shadow-md flex font-NotoSansKhmer">
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
        <router-link
          to="/profile"
          class="flex items-center justify-center gap-3 bg-primery1/30 p-2 rounded-full h-[70%] cursor-pointer"
        >
          <div class="px-3 py-1 rounded-full">
            <p class="text-body font-semibold text-primery1 overflow-hidden">
              {{ user?.displayName }}
            </p>
          </div>
          <div v-if="userDocument" class="w-12 h-12 rounded-full border">
            <div
              v-if="!userDocument.photoURL"
              class="w-full h-full flex items-center justify-center"
            >
              <h2 class="text-primery1 uppercase text-heading2">
                {{ user?.displayName[0] }}
              </h2>
            </div>
            <img
              v-else
              class="object-cover w-full h-full rounded-full"
              :src="userDocument.photoURL"
              :alt="userDocument.photoURL"
            />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import getUser from "../composible/getUser";
import { getCollectionQuery } from "@/composible/getCollection";
import { onMounted, ref } from "vue";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { projectFirestore } from "@/firebase/config";
export default {
  setup() {
    const userlogin = getAuth().currentUser;
    const dataitem = ref([]);
    const getData = async () => {
      try {
        const data = await getCollectionQuery(
          "users",
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
    const userDocument = ref(null);

    const fetchUserData = async () => {
      try {
        const userlogin = getAuth().currentUser;
        if (userlogin) {
          const docRef = doc(projectFirestore, "users", userlogin.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            userDocument.value = docSnap.data();
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    onMounted(() => {
      getData();
    });
    onMounted(() => {
      fetchUserData();
    });
    const { user } = getUser();

    return { user, dataitem, userDocument };
  },
};
</script>
