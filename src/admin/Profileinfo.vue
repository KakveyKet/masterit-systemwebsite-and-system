<template>
  <div
    class="w-full h-screen bg-background flex items-center justify-center relative"
  >
    <router-link to="/admin" class="w-[1040px] fixed top-3 left-3">
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
    <div class="w-1/2 h-[50%] bg-white rounded-md shadow-md p-5">
      <h1 class="text-2xl font-bold mb-4">Profile</h1>
      <div v-if="userDocument" class="flex gap-5 items-center relative">
        <div class="space-y-4">
          <p><strong>Username:</strong></p>
          <input type="text" class="input" v-model="userDocument.username" />
          <p><strong>Email:</strong></p>
          <input type="email" class="input" v-model="userDocument.email" />
          <p><strong>Password:</strong></p>
          <input
            type="password"
            class="input"
            v-model="userDocument.password"
          />
        </div>
        <div class="w-[1px] h-[350px] bg-borderBody"></div>
        <div v-if="userDocument" class="mt-4">
          <div v-if="!userDocument.photoURL">No Profile Yet</div>
          <div v-else>
            <img
              v-if="userDocument.photoURL"
              :src="userDocument.photoURL"
              alt="Profile Picture"
              class="mt-2 rounded-md"
              style="max-width: 200px; max-height: 200px"
            />
          </div>

          <div
            class="mt-4 bg-blue-500 hover:bg-blue-700 text-center text-white font-bold w-[200px] py-2 rounded relative"
          >
            <input
              class="opacity-0 absolute w-full h-full right-0 top-0"
              type="file"
              id="profilePic"
              @change="uploadProfilePicture"
            />
            <h2>Upload Profile</h2>
          </div>
        </div>
        <button
          @click.prevent="submitProfile"
          class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute -bottom-8 right-2"
        >
          Save Change
        </button>
      </div>
      <div v-else>
        <p>Loading user data...</p>
      </div>
    </div>
  </div>
  <Notivue v-slot="item">
    <Notification :item="item" />
  </Notivue>
</template>

<script>
import { ref, onMounted } from "vue";
import useStorage from "@/composible/useStorange";
import useCollection from "@/composible/useCollection";
import { push, Notivue, Notification } from "notivue";
import { useRouter } from "vue-router";
import { getAuth, updateEmail, updatePassword } from "firebase/auth";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { projectFirestore } from "@/firebase/config";

export default {
  components: {
    Notivue,
    Notification,
  },
  setup() {
    const user = getAuth().currentUser;
    const password = ref("");
    const userDocument = ref(null);

    const { uploadImage } = useStorage();
    const { updateDocs } = useCollection("users");
    const router = useRouter();

    const fetchUserData = async () => {
      try {
        const docRef = doc(projectFirestore, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          userDocument.value = docSnap.data();
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    onMounted(() => {
      fetchUserData();
    });

    const uploadProfilePicture = async (event) => {
      const file = event.target.files[0];
      if (!file) return;

      try {
        const imageURL = await uploadImage(`profilePictures/${user.uid}`, file);
        await updateDocs(user.uid, { photoURL: imageURL });
        userDocument.value.photoURL = imageURL;
      } catch (error) {
        console.error("Error uploading profile picture:", error.message);
        push.error("Failed to upload profile picture");
      }
    };

    const submitProfile = async () => {
      try {
        // Update email
        await updateEmail(user, userDocument.value.email);
        // Update password
        if (password.value) {
          await updatePassword(user, password.value);
        }
        // Update username
        await updateDoc(doc(projectFirestore, "users", user.uid), {
          username: userDocument.value.username,
        });
        push.success("Profile updated successfully");
      } catch (error) {
        console.error("Error updating profile:", error.message);
        push.error("Failed to update profile");
      }
    };

    return {
      user,
      password,
      userDocument,
      uploadProfilePicture,
      submitProfile,
    };
  },
};
</script>
