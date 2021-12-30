<template>
  <div class="back-top">
    <img src="~assets/img/backTop/backTop.png" class="back-img">
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {},
  methods: {
  },
  created () {},
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
.back-top {
  position: fixed;
  right: .266667rem;
  bottom: 1.466667rem;
  z-index: 999;
  border: 1px #3794FF solid;
  border-radius: 50%;
  img {
    width: 1.066667rem;
    height: 1.066667rem;
  }
}
</style>
