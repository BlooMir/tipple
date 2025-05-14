<template>
  <q-page class="tipple-primary-to-bottom">
    <header class="mail-header flex items-center q-pl-xl col-3">
      <HeaderLogo pagename="Mail" :leftwing="true" :rightwing="true"></HeaderLogo>
    </header>

    <article class="flex col-9">
      <div class="mail-article-left fs32" style="flex: 0 0 25%">123</div>
      <div class="mail-article-right fs32" style="flex: 0 0 75%">123</div>
    </article>
  </q-page>
</template>

<script setup>
import HeaderLogo from 'src/components/common/HeaderLogo.vue'
</script>

<style lang="scss" scoped>
.mail-header {
  height: 190px;
}
.mail-article-left {
  background-color: rgba(255, 255, 255, 0.32);
}
.mail-article-right {
  background-color: rgba(0, 0, 0, 0.46);
}
</style>
