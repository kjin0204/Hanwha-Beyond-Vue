<script setup>
  import {RouterLink, RouterView} from 'vue-router';
</script>

<template>
  <header>
    <h2>basic router</h2>
    <nav>
      <RouterLink to="/">Home</RouterLink> <!--a 테그와 비슷하게 페이지를 이동 시키기 위한 요소(선택하면 해당 컴포넌트로 routing)-->
      <RouterLink to="/pathvariable/1">PathVariable</RouterLink>
      <RouterLink to="/querystring?name=홍길동$age=20">QueryString</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView/> <!--link된 component가 그려지는 위치-->
  </main>
</template>

<style scoped>

</style>

