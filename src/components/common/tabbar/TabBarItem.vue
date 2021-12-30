<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="tab-icon" ></slot></div>
    <div v-else><slot name="tab-icon-action"></slot></div>
    <div :style="textColor"><slot name="tab-text"></slot></div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // isActive: true
    }
  },
  props: {
    path: String,
    activeColor: {
      type: String,
      default () {
        return 'red'
      }
    }
  },
  methods: {
    itemClick () {
      // this.$router.replace(this.path)
      this.$router.push( {path: this.path})
    }
  },
  computed: {
    textColor () {
      return this.isActive ? {color: this.activeColor} : {}
    },
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  components: {},
  created () {},
  mounted () {
  }
}
</script>
<style scoped>
    .tab-bar-item{
        flex: 1;
        text-align: center;
        height: 1.306667rem;
    }
    .tab-bar-item img{
        height: .64rem;
        width: .64rem;
    }
</style>
