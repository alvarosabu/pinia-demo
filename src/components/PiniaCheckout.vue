<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from '/@/store';

const store = useStore();
</script>
<template>
  <div class="bg-white shadow-lg rounded p-4 rounded-xl pb-8">
    <header class="mb-8">
      <span
        class="
          text-2xl text-blue-400
          mr-8
          inline-flex
          p-4
          rounded-full
          shadow-lg
        "
      >
        <i class="iconify" :data-icon="'carbon:money'" />
      </span>
      <span class="font-extrabold">Checkout</span>
    </header>
    <div class="divide-y">
      <p class="flex items-center py-4">
        <Pinia class="mr-8" /> <span class="badge">x {{ store.cart }}</span>
      </p>
      <p class="py-4"><span class="mr-8">Total:</span>{{ store.total }} €</p>
    </div>
    <footer class="flex justify-end">
      <button class="btn btn-blue" @click="store.procedeCheckout">
        Proceed
      </button>
    </footer>
  </div>
</template>
