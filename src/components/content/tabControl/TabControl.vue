<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="item.id" class="tab-control-item" :class="{active: index === currentIndex}" @click="itemClick(index)">
      <span>{{item.title}}</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      currentIndex: 0
    }
  },
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {},
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  },
  created () {},
  mounted () {
  }
}
</script>
<style lang="scss" scoped>
  .tab-control {
    display: flex;
    text-align: center;
    font-size: .4rem;
    height: 1.066667rem;
    line-height: 1.066667rem;
    font-weight: 550;
  }
  .tab-control-item {
    flex: 1;
    span {
      padding: .106667rem;
    }
  }
  .active {
    color: var(--color-higt-text)
  }
  .active span {
    border-bottom: .08rem var(--color-higt-text) solid;
  }
</style>
