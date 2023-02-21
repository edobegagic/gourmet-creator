<template>
  <div class="flex flex-col">
    <div class="flex no-print">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[
          'py-2 px-4 border-b-2',
          currentTab === tab ? 'border-black font-bold' : 'border-transparent',
        ]"
        @click="currentTab = tab"
      >
        {{ tab }}
      </button>
    </div>

    <div
      class="grid grid-cols-2 gap-8 pt-12 sm:grid-cols-4 md:grid-cols-5 no-print"
    >
      <div
        v-for="(item, index) in currentItems"
        :key="index"
        class="bg-[#f5f5f5] border-[#888888] border-[1px] border-solid h-14 select-none flex justify-center items-center cursor-pointer hover:opacity-60"
        @click="addItem(item)"
      >
        {{ item }}
      </div>
    </div>
    <div class="mt-16 no-print">
      <h4 class="pb-4 text-xl font-bold">Selected Items:</h4>
      <ul class="pl-4 list-disc">
        <li
          v-for="(item, index) in selectedItems"
          :key="index"
          class="flex select-none items-center justify-between max-w-xs py-2 cursor-pointer gourmet-list-item bg-[#f5f5f5] px-4 my-2"
          @click="removeItem(index)"
        >
          <span class="mr-2">{{ item }}</span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
            >
              <path
                d="M18 6L6 18"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="black"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </li>
      </ul>
    </div>

    <div
      class="flex flex-col items-center justify-center h-full space-y-6 px-9"
    >
      <h3>Choose a Language</h3>
      <div class="grid grid-cols-2 gap-8">
        <div @click="print('hr')" class="cursor-pointer">
          <h4>CRO</h4>
        </div>
        <div class="cursor-pointer" @click="print('en')">
          <h4>ENG</h4>
        </div>
      </div>
    </div>

    <div class="only-print">
      <div class="flex justify-center"><h1>Menu</h1></div>
      <ul class="flex-col items-center justify-center pt-8 pl-4 list-disc">
        <li
          v-for="(item, index) in selectedItems"
          :key="index"
          class="flex select-none items-center m-auto justify-center max-w-xs py-2 cursor-pointer gourmet-list-item bg-[#f5f5f5] px-4"
          @click="removeItem(index)"
        >
          <span class="mr-2">{{ item }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: ['Menu', 'A La Carte', 'Wine'],
      currentTab: 'Menu',
      items: {
        Menu: [
          this.$t('menu.appetizer'),
          this.$t('menu.entree'),
          this.$t('menu.dessert'),
          this.$t('menu.drinks'),
        ],
        'A La Carte': [
          this.$t('a_la_carte.starter'),
          this.$t('a_la_carte.main_course'),
          this.$t('a_la_carte.side_dish'),
          this.$t('a_la_carte.dessert'),
        ],
        Wine: [
          this.$t('wine.red_wine'),
          this.$t('wine.white_wine'),
          this.$t('wine.rose_wine'),
          this.$t('wine.sparkling_wine'),
          this.$t('wine.teran'),
          this.$t('wine.malvazija'),
          this.$t('wine.sovignon'),
          this.$t('wine.proseco'),
        ],
      },
      selectedItems: [],
    }
  },
  computed: {
    currentItems() {
      return this.items[this.currentTab]
    },
  },
  methods: {
    addItem(item) {
      this.selectedItems.push(item)
    },
    removeItem(index) {
      this.selectedItems.splice(index, 1)
    },
    print(locale) {
      this.$i18n.setLocale(locale)
      // window.print()
    },
  },
}
</script>

<style scoped>
.gourmet-list-item:hover span {
  color: red;
}
.gourmet-list-item:hover div svg path {
  stroke: red;
}
</style>
