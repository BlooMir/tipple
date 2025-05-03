<template>
  <div class="flex justify-around items-end">
    <template v-for="(letter, idx) in line" :key="idx">
      <div
        v-if="letter !== ','"
        class="letter font-letter"
        :class="['letter-' + letter.toLowerCase()]"
      >
        {{ letter }}
      </div>
      <div v-else class="letter domino-box"></div>
    </template>
  </div>
</template>

<script setup>
// props
const { line } = defineProps(['line'])
</script>

<style lang="scss" scoped>
.letter {
  width: 60px;
  height: 190px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 200px;
  font-family: 'Six Caps', sans-serif;
  -webkit-text-stroke: 2px $secondary;
  color: $secondary;
}

.domino-box {
  width: 36px;
  height: 160px;
  outline: 5px solid $secondary;
  outline-offset: -6px;
  border-radius: 6px;
}
</style>
