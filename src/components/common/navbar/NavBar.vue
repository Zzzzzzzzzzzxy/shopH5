<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left">

      </slot>
    </div>
    <div class="center">
      <slot name="center">

      </slot>
    </div>
    <div class="right">
      <slot name="right">

      </slot>
    </div>
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
<style scoped>
.nav-bar{
  display: flex;
  height: 1.173333rem;
  line-height: 1.173333rem;
  text-align: center;
  background: var(--color-tint);
  color: var(--color-text);
}
.left,.right{
  width: 1.6rem;
}
.center{
  flex: 1;
}
</style>
