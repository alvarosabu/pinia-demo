<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from '/@/store';

const amount = ref(0);

const store = useStore();
</script>

<template>
  <div class="bg-white shadow-lg rounded p-4 rounded-xl">
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
        <i class="iconify" :data-icon="'carbon:shopping-cart'" />
      </span>
      <span class="font-extrabold">Your cart</span>
    </header>
    <div class="w-full grid grid-cols-6 gap-4 min-h-30">
      <Pinia v-for="item in store.cart" :key="item" />
    </div>
    <footer class="flex justify-end">
      <input type="number" class="form-control mr-4 w-15" v-model="amount" />
      <button class="btn btn-blue flex" @click="store.removeFromCart(amount)">
        Remove
      </button>
    </footer>
  </div>
</template>
