<template>
  <q-page class="screen-bg flex justify-center items-center q-pa-md">
    <div class="screen-area">
      <!-- <q-btn color="primary" style="color: #000">테스트용 버튼</q-btn> -->
      <!-- 첫째 줄 -->
      <SingleLetter :line="sentence1"></SingleLetter>
      <div class="domino-floor q-my-lg"></div>

      <!-- 둘째 줄 -->
      <SingleLetter :line="sentence2"></SingleLetter>
      <div class="domino-floor q-my-lg"></div>

      <!-- 셋째 줄 -->
      <SingleLetter :line="sentence3"></SingleLetter>
      <div class="domino-floor q-my-lg"></div>

      <div class="co2-area column">
        <span class="co2-amount flex justify-center">12345</span>
        <span class="co2e flex justify-end">CO&#8322;e</span>
      </div>

      <!-- 넷째 줄 -->
      <div class="domino-floor q-my-lg"></div>
      <SingleLetter :line="sentence4"></SingleLetter>

      <!-- 다섯째 줄 -->
      <div class="domino-floor q-my-lg"></div>
      <SingleLetter :line="sentence5"></SingleLetter>

      <!-- 여섯째 줄 -->
      <div class="domino-floor q-my-lg"></div>
      <SingleLetter :line="sentence6"></SingleLetter>
    </div>
  </q-page>
</template>

<script setup>
import SingleLetter from '../components/main/SingleLetter.vue'

const sentence1 = 'one,small'.split('')
const sentence2 = 'acts,can,'.split('')
const sentence3 = 'cause,big'.split('')
const sentence4 = 'resulthat'.split('')
const sentence5 = 'is,domino'.split('')
const sentence6 = 'effect,,,'.split('')
</script>

<style lang="scss" scoped>
.screen-bg {
  background-color: #000;
  font-size: 40px;
}
.screen-area {
  width: 1000px;
}
.domino-floor {
  width: 1000px;
  height: 18px;
  border: 3px solid $secondary;
  border-radius: 3px;
}
.co2-area {
  height: 310px;
  color: $secondary;
  font-family: 'Sarpanch', sans-serif;
  .co2-amount {
    height: 220px;
    font-weight: 700;
    font-size: 200px;
    letter-spacing: 20px;
  }
  .co2e {
    font-weight: 500;
    font-size: 50px;
    padding-right: 40px;
    /* -webkit-text-stroke: 2px $secondary;  */
  }
}
</style>
