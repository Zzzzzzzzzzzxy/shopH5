<template>
  <div id="app">
    <router-view/>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar/MainTabBar'
export default {
  components: { MainTabBar },
  name: 'App',
  beforeRouteUpdate (to, from, next) {
    console.log('路由更新之前：从to获取参数', to.params, '从this.$route获取参数', this.$route.params)
    next()
    console.log('路由更新之后：从to获取参数', to.params, '从this.$route获取参数', this.$route.params)
  }
}
</script>

<style>
  @import 'assets/css/base.css';
</style>
