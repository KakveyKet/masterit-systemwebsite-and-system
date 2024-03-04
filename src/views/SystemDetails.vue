<template>
  <div class="flex flex-col">
    <div>
      <NavbarVue />
    </div>
    <div>
      <div
        class="w-full md:w-full xl:w-[1420px] lg:w-[1420px] mx-auto space-y-4"
      >
        <div
          v-motion-slide-left
          class="lg:mt-52 xl:mt-52 md:mt-32 mt-20 text-start lg:p-0 xl:p-0 p-3 md:p-3"
        >
          <h1 class="font-NotoSansKhmer text-primery1">Product 1</h1>
        </div>

        <div
          v-motion-slide-left
          class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3"
        >
          <p class="text-textbody font-semibold text-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus
            arcu bibendum at varius vel pharetra. Sit amet consectetur
            adipiscing elit. Odio euismod lacinia at quis.
          </p>
          <br />
          <p class="text-textbody font-semibold text-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            doloribus veniam earum qui possimus. Eum voluptas debitis autem,
            laborum aut quisquam delectus provident! Rem itaque hic, reiciendis
            consequatur inventore harum voluptas officia blanditiis maxime
            soluta sunt eos? Dolores, facere fugiat maxime facilis in harum,
            delectus odio
          </p>
        </div>

        <!-- taiils -->
        <div
          class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3 space-y-4"
        >
          <!-- details1 -->

          <div
            v-motion-slide-left
            class="w-full lg:flex lg:flex-row xl:flex md:flex md:flex-col-reverse flex flex-col-reverse items-start justify-center space-y-4 gap-12 py-3"
          >
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <h2
                class="text-textbody font-NotoSansKhmer text-heading3 font-semibold"
              >
                Detail 1
              </h2>
              <div class="flex flex-col items-center justify-center w-[90%]">
                <p class="text-body font-NotoSansKhmer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  incidunt praesentium repudiandae, animi nemo enim beatae in.
                  Eaque nostrum ex quod obcaecati laborum! Ipsum architecto,
                  consectetur esse quidem quisquam eaque distinctio accusamus
                  perferendis aspernatur. Cumque nihil labore eos repellendus
                  consequuntur!
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <img
                class="w-full rounded-[6px]"
                src="https://i.pinimg.com/564x/96/b8/0d/96b80d0d638a749bf45d629a32f6e5a3.jpg"
              />
            </div>
          </div>

          <!-- details2 -->
          <div
            v-motion-slide-left
            class="w-full lg:flex xl:flex md:block block items-start justify-center space-y-4 gap-12 py-3"
          >
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <img
                class="w-full rounded-[6px]"
                src="https://i.pinimg.com/564x/96/b8/0d/96b80d0d638a749bf45d629a32f6e5a3.jpg"
              />
            </div>
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <h2
                class="text-textbody text-start font-NotoSansKhmer text-heading3 font-semibold"
              >
                Detail 1
              </h2>

              <p class="text-body font-NotoSansKhmer">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                incidunt praesentium repudiandae, animi nemo enim beatae in.
                Eaque nostrum ex quod obcaecati laborum! Ipsum architecto,
                consectetur esse quidem quisquam eaque distinctio accusamus
                perferendis aspernatur. Cumque nihil labore eos repellendus
                consequuntur!
              </p>
            </div>
          </div>
          <!-- details3 -->
          <div
            v-motion-slide-left
            class="w-full lg:flex lg:flex-row xl:flex md:flex md:flex-col-reverse flex flex-col-reverse items-start justify-center space-y-4 gap-12 py-3"
          >
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <h2
                class="text-textbody font-NotoSansKhmer text-heading3 font-semibold"
              >
                Detail 1
              </h2>
              <div class="flex flex-col items-center justify-center w-[90%]">
                <p class="text-body font-NotoSansKhmer">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  incidunt praesentium repudiandae, animi nemo enim beatae in.
                  Eaque nostrum ex quod obcaecati laborum! Ipsum architecto,
                  consectetur esse quidem quisquam eaque distinctio accusamus
                  perferendis aspernatur. Cumque nihil labore eos repellendus
                  consequuntur!
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <img
                class="w-full rounded-[6px]"
                src="https://i.pinimg.com/564x/96/b8/0d/96b80d0d638a749bf45d629a32f6e5a3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <div
        v-for="product in data"
        :key="product"
        class="w-full md:w-full xl:w-[1420px] lg:w-[1420px] mx-auto space-y-4"
      >
        <div
          v-motion-slide-left
          class="lg:mt-52 xl:mt-52 md:mt-32 mt-20 text-start lg:p-0 xl:p-0 p-3 md:p-3"
        >
          <h1 class="font-NotoSansKhmer text-primery1">
            {{ product.productname }}
          </h1>
        </div>

        <div
          v-motion-slide-left
          class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3"
        >
          <p class="text-textbody font-semibold text-body">
            {{ product.productdes }}
          </p>
        </div>

        <!-- taiils -->
        <div
          v-for="(productfeatures, index) in product.productfeature"
          :key="index"
          class="w-full max-w-[1420px] py-4 lg:p-0 xl:p-0 p-3 md:p-3 space-y-4"
        >
          <!-- details1 -->

          <div
            v-motion-slide-left
            :class="{
              'w-full lg:flex lg:flex-row  xl:flex xl:flex-row md:flex md:flex-col-reverse  flex flex-col-reverse items-start justify-center  space-y-4 gap-12 py-3':
                index % 2 === 0,
              'w-full lg:flex lg:flex-row-reverse xl:flex-row-reverse xl:flex md:flex md:flex-col-reverse flex flex-col-reverse items-start justify-center space-y-4 gap-12 py-3':
                index % 2 !== 0,
            }"
          >
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <h2
                class="text-textbody font-NotoSansKhmer text-heading3 font-semibold"
              >
                {{ productfeatures.feature1 }}
              </h2>
              <div class="flex flex-col items-center justify-center w-[90%]">
                <p class="text-body font-NotoSansKhmer">
                  {{ productfeatures.content }}
                </p>
              </div>
            </div>
            <div class="lg:w-1/2 xl:w-full md:w-full w-full">
              <img class="w-full rounded-[6px]" :src="productfeatures.image" />
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
import { ref, onMounted, onUnmounted } from "vue";
export default {
  components: {
    FooterVue,
    NavbarVue,
  },
  setup() {
    const show = ref(false);
    const windowWidth = ref(window.innerWidth);

    const handleScroll = () => {
      if (window.scrollY > 200) {
        show.value = true;
      } else {
        show.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const data = ref([
      {
        productname: "Pos System",

        productdes:
          "As a business owner, it is critical that you maintain a responsive website design to appeal to search engines and online users. You must ensure your target customers see a legit business platform when they search for your company online. Otherwise, you risk losing trust from your prospective clients and dissuade them from engaging with your brand.",
        productfeature: [
          {
            feature1: "feature1",
            content:
              "custom website designYour website is a powerful communication platform that allows you to market your brand 24/7 and connect with clients from across locations. However, not all sites guarantee your desired return on investment (ROI). The primary consideration is choosing between a website template and a custom design website.A website template is a pre-made web design that allows developers to plug in content into a sophisticated framework built through HTML or CSS. You can edit limited features, such as colors, font styles and images. But aside from these, what you see is what you get. Although ready-made templates help you save time and money, they lack flexibility and uniqueness.",
            image:
              "https://i.pinimg.com/564x/96/b8/0d/96b80d0d638a749bf45d629a32f6e5a3.jpg",
          },
          {
            feature1: "feature2",
            content:
              "Your website is the backbone of your business. It supports all your company’s digital marketing efforts and serves as your primary customer touchpoint. A responsive, custom eCommerce website design gives online users a clear idea of your brand offerings, unique value propositions and core values.According to a report released by the eCommerce Foundation, 88 percent of U.S. consumers perform online research before making a purchase or visiting a local store. Without a professional custom website design, online shoppers can get easily frustrated. This results in an increased bounce rate, poor online reputation and lower conversion rate.",
            image:
              "https://i.pinimg.com/564x/d5/11/ef/d511efd228680d0d2a3cc0c945f26fa5.jpg",
          },
          {
            feature1: "feature3",
            content:
              "A custom design website, on the other hand, allows you to establish and express your brand through tailored page elements that align with your objectives. Custom web design cost is relatively higher than website templates, but they offer numerous benefits that give you a competitive edge. A custom WordPress website design is more search engine-friendly, customer-centric, unique and scalable than built-in templates.By choosing custom website design packages, you build a website around your specific customer journey and brand messaging.",
            image:
              "https://i.pinimg.com/736x/1d/bb/82/1dbb82048e767a2a70d404ba8e8d9498.jpg",
          },
          {
            feature1: "feature4",
            content:
              "A custom design website, on the other hand, allows you to establish and express your brand through tailored page elements that align with your objectives. Custom web design cost is relatively higher than website templates, but they offer numerous benefits that give you a competitive edge. A custom WordPress website design is more search engine-friendly, customer-centric, unique and scalable than built-in templates.By choosing custom website design packages, you build a website around your specific customer journey and brand messaging.",
            image:
              "https://i.pinimg.com/736x/1d/bb/82/1dbb82048e767a2a70d404ba8e8d9498.jpg",
          },
          {
            feature1: "feature5",
            content:
              "A custom design website, on the other hand, allows you to establish and express your brand through tailored page elements that align with your objectives. Custom web design cost is relatively higher than website templates, but they offer numerous benefits that give you a competitive edge. A custom WordPress website design is more search engine-friendly, customer-centric, unique and scalable than built-in templates.By choosing custom website design packages, you build a website around your specific customer journey and brand messaging.",
            image:
              "https://i.pinimg.com/736x/1d/bb/82/1dbb82048e767a2a70d404ba8e8d9498.jpg",
          },
        ],
      },
    ]);
    return { data, windowWidth, show };
  },
};
</script>
