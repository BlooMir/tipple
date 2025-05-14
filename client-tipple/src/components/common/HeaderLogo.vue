<template>
  <div class="logo-container" style="gap: 30px;">
    <!-- 왼쪽 도미노 -->
    <div class="wing">
      <img v-if="leftwing" src="../../assets/left-domino.svg" class="left-wing"></img>
    </div>

    <span class="fs44 fw600 text-white" >{{ pagename }}</span>

    <!-- 오른쪽 도미노 -->
    <div class="wing">
      <img v-if="rightwing" src="../../assets/right-domino.svg"  class="right-wing"></img>
    </div>
  </div>
</template>

<script setup>
// props
const { pagename, leftwing, rightwing } = defineProps(['pagename', 'leftwing', 'rightwing'])
</script>

<style lang="scss" scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 560px;
  .wing {
    min-width: 100px;
    max-width: 200px;
    min-height: 16px;
    max-height: 32px;
    .left-wing {
      width: 100%;
      height: 100%;
    }
    .right-wing {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
