<script setup lang="ts">
import { useStore } from '/@/store';

const store = useStore();
</script>
<template>
  <div class="container max-w-3xl mx-auto mt-60">
    <div
      class="bg-white rounded-xl shadow-xl p-4 mb-12 divide-x flex items-center"
    >
      <span class="pr-8">
        Available <span class="badge">{{ store.availablePinias }}</span>
      </span>
      <span class="px-8">
        <span class="relative text-2xl">
          <i class="iconify" data-icon="carbon:shopping-cart"></i>
          <span
            class="
              absolute
              text-xs
              flex
              justify-center
              bg-blue-500
              text-white
              w-4
              h-4
              rounded-full
              -right-4
              top-0
            "
            >{{ store.cart }}</span
          >
        </span>
      </span>
    </div>
    <div class="grid grid-cols-3 gap-8">
      <PiniaMarket />
      <PiniaCart />
      <PiniaCheckout />
    </div>
  </div>
</template>

<style>
.badge {
  @apply text-xs font-bold rounded-lg px-2.5 bg-blue-400 text-white;
}
</style>
