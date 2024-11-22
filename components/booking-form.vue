<template>
  <div class="h-[100px] w-[555px]">
    <div class="absolute h-[100px] w-[507px] rounded-md bg-[#6C6CFFFF]">
      <div class="absolute ml-8 mt-6 w-[184px] opacity-100">
        <label
          class="leading[22px] font-['Sarabun'] text-sm font-bold text-white"
          >From</label
        >
        <input
          type="text"
          class="leading[22px] h-[29px] w-[184px] rounded border-0 bg-[#F3F4F600] pl-3 pr-3 font-['Sarabun'] text-sm font-normal text-white placeholder:text-white"
          placeholder="Your go-to place"
        />
        <hr class="h-0 w-[181px] rotate-0 border-[1px]" />
      </div>
      <div class="absolute ml-[281px] mt-6 w-[184px] opacity-100">
        <label
          class="leading[22px] font-['Sarabun'] text-sm font-bold text-white"
          >To</label
        >
        <input
          type="text"
          class="leading[22px] h-[29px] w-[184px] rounded border-0 bg-[#F3F4F600] pl-3 pr-3 font-['Sarabun'] text-sm font-normal text-white placeholder:text-white"
          placeholder="Your destination"
        />
        <hr class="h-0 w-[181px] rotate-0 border-[1px]" />
      </div>
    </div>
    <input
      type="button"
      class="absolute ml-[515px] h-[100px] w-[40px] cursor-pointer items-center justify-center rounded-md border-0 bg-[#11D396FF] opacity-100 hover:bg-[#0FBE86FF]"
    />
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>