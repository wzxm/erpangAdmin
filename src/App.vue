<template>
  <div id="app">
    <transition name="el-fade-in">
        <router-view v-show="show"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data: () => ({
    show: true
  })
}
</script>

<style>
  @import "../static/css/main.css";
</style>
