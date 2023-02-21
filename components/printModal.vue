<template>
  <transition name="fade">
    <div class="overlay no-print" @click="$emit('close')">
      <div class="modal" @click.stop>
        <button class="close-button" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path
              d="M18 6L6 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

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
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  methods: {
    print(locale) {
      this.$i18n.setLocale(locale)
      // window.print()
    },
  },
}
</script>
<style>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  width: 800px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  background: none;
  border: 0;
  fill: currentColor;
}
@media print {
  .no-print {
    display: none;
  }
}

/* 
-- MODAL --

Usage: 
- In parent component script data():
showModal: false,

- In parent component template:
MODAL TRIGGER:
<div class="flex items-center justify-center w-40 h-10 cursor-pointer text-secondary-1 bg-primary-1" @click="showModal = true">
    PRINT
</div>

MODAL:
<transition name="fade">
<PrintModal v-if="showModal" @close="showModal = false" />
</transition> 
*/
</style>
