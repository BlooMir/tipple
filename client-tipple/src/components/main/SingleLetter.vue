<template>
  <div class="flex justify-around">
    <template v-for="(letter, idx) in line" :key="idx">
      <q-img
        v-if="letter !== ','"
        class="letter"
        fit="contain"
        :src="getLetterSrc(letter)"
        :alt="letter"
      />
      <div v-else class="letter domino-box"></div>
    </template>
  </div>
</template>

<script setup>
// props
const { line } = defineProps(['line'])

const getLetterSrc = (letter) => {
  if (letter === ',') return
  return `/src/assets/letters/${letter}.svg`
}
</script>

<style lang="scss" scoped>
.letter-container {
  width: 1000px;
}
.letter {
  width: 60px;
  height: 185px;
}
.domino-box {
  outline: 5px solid $secondary;
  outline-offset: -5px;
  border-radius: 3px;
}
</style>
