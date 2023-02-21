<template>
  <div class="container px-6 py-24 mx-auto">
    <div class="flex justify-between no-print">
      <h3 class="font-title">Gourmet Creator</h3>

      <div class="flex items-center">
        <div
          class="flex items-center justify-center h-full border-r-2 border-solid px-9 border-r-[#888888]"
        >
          <div class="grid grid-cols-2 gap-x-5">
            <div @click="changeLang('hr')" class="cursor-pointer">
              <p>HRV</p>
            </div>
            <div class="cursor-pointer" @click="changeLang('en')">
              <p>ENG</p>
            </div>
          </div>
        </div>
        <div
          class="flex items-center justify-center w-40 ml-10 font-semibold tracking-wider cursor-pointer h-11 rounded-xl text-secondary-1 bg-primary-1"
          @click="print()"
        >
          PRINT
        </div>
      </div>
    </div>

    <menu-grid class="pt-12" />
    <!-- <transition name="fade">
      <PrintModal v-if="showModal" @close="showModal = false" />
    </transition> -->
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  mounted() {
    console.log(this.$i18n.locale) // prints the current language
  },

  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    changeLang(locale) {
      const items = this.selectedItems
      this.$i18n.setLocale(locale)
      this.selectedItems = items
    },
    print() {
      window.print()
    },
  },
}
</script>
<style>
@media print {
  .no-print {
    display: none;
  }
}
</style>
